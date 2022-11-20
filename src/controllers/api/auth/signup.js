import { prismaClient } from '../../../helpers/prisma-client.js'
import bcrypt from 'bcrypt';

export const SignupController = async (req, res) => {

  try {
    //ข้อมูลที่ได้จากfrontendต้องอยุ่ในreq
    const { body } = req;
    console.log(body, ' :body');

    const userData = {
      name: body.name,
      email: body.email,
      phoneNumber: body.phoneNumber,
      password: await bcrypt.hash(body.password, 10)
    }

    const newUser = await prismaClient.user.create({
      data: userData
    })

    delete newUser.password

    return res.status(201).json(newUser);

  } catch (error) {
    return res
    .status(400)
    .json({
      message: 'Error Signup User',
      error
  })
  }

}
