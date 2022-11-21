import yup from 'yup';
import bcrypt from 'bcrypt';
import { handleErrors } from '../../../helpers/haddle-error.js'
import { prismaClient } from '../../../helpers/prisma-client.js';

//Criteria of Validation
const loginSchema = yup.object({
    email: yup.string().required(),
    password: yup.string().required()

})

//LoginController
export const LoginController = async (req, res) => {
  try {
    const { body } = req;
    const validated = await loginSchema.validate(body, {
      abortEarly: false,
      stripUnknown: true
    });
    const user = await prismaClient.user.findFirst({
      where: {
        email: validated.email
      }
    });

    //Email is wrong
    if (!user) {
      return res.status(401).json({
        email: 'Email is wrong'
      })
    }

    //Password is wrong
    if (!await bcrypt.compare(validated.password, user.password)) {
      return res.status(401).json({
        password: 'Password is wrong'
      })
    }

    //session
    req.session.user =  { id: user.id }
    await req.session.save();

    //password delete
    delete user.password;
    return res.status(200).json(user);
  } catch(error) {
    return handleErrors(res, error)
  }
}
