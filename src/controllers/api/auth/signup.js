import bcrypt from 'bcrypt';
import yup from 'yup';
import { handleErrors } from '../../../helpers/haddle-error.js'
import { prismaClient } from '../../../helpers/prisma-client.js'


//Criteria use for Validation by using Yep
const signupSchema  = yup.object({
  email:  yup.string().email().required().test({
    message: () => 'Email already exists',
    test: async (value) => {
      try {
        await prismaClient.user.findUnique({
          where: {
            email: value
          },
          rejectOnNotFound: true
        })
        return false
      } catch (err) {
        return true
      }
    }
  }),
  name: yup.string().required(),
  phoneNumber: yup.string().required(),
  password: yup.string().min(4).required(),
  passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required()
});

export const SignupController = async (req, res) => {

  try {
    //ข้อมูลที่ได้จากfrontendต้องอยุ่ในreq
    const { body } = req;
    const validated = await signupSchema.validate(body, {
      abortEarly: false,
      stripUnknown: true
    });
    const userData = {
      name: validated.name,
      email: validated.email,
      phoneNumber: validated.phoneNumber,
      password: await bcrypt.hash(validated.password, 10)
    }

    const newUser = await prismaClient.user.create({
      data: userData
    })

    delete newUser.password

    //session
    req.session.user = { id: newUser.id }
    await req.session.save();

    return res.status(201).json(newUser);

  } catch (error) {
    return handleErrors(res, error)
  }

}
