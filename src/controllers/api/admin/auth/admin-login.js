import yup from 'yup';
import bcrypt from 'bcrypt';
import { handleErrors } from '../../../helpers/haddle-error.js'
import { prismaClient } from '../../../helpers/prisma-client.js';

//Criteria of Validation
const loginSchema = yup.object({
    email: yup.string().required(),
    password: yup.string().required()

})

export const AdminLoginController = async (req, res) => {
  try {
    const { body } = req;
    const validated = await loginSchema.validate(body, {
      abortEarly: false,
      stripUnknown: true
    });
    const admin = await prismaClient.admin.findFirst({
      where: {
        email: validated.email
      }
    });

    //Email is wrong
    if (!admin) {
      return res.status(401).json({
        email: 'Email is wrong'
      })
    }

    //Password is wrong
    if (!await bcrypt.compare(validated.password, admin.password)) {
      return res.status(401).json({
        password: 'Password is wrong'
      })
    }

    //session
    req.session.admin =  { id: admin.id }
    await req.session.save();

    //password delete
    delete admin.password;
    return res.status(200).json(admin);
  } catch(error) {
    return handleErrors(res, error)
  }

}