import bcrypt from 'bcrypt';
import yup from 'yup';

import { handleErrors } from '../../../../helpers/haddle-error.js';
import { prismaClient } from '../../../../helpers/prisma-client.js';
import { uploadImagePath } from '../../../../middlewares/uploader.js';

const signupSchema  = yup.object({
  email:  yup.string().email().required().test({
    message: () => 'Email already exists',
    test: async (value) => {
      try {
        console.log("eoaeoae")
        await prismaClient.admin.findUnique({
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
  role: yup.string().required(),
  phoneNumber: yup.string().required(),
  password: yup.string().min(4).required(),
});

export const CreateTeamController = async (req, res) => {
  try {
    const { body } = req;
    const validated = await signupSchema.validate(body, {
      abortEarly: false,
      stripUnknown: true
    });
    const adminData = {
      name: validated.name,
      email: validated.email,
      phoneNumber: validated.phoneNumber,
      role: validated.role,
      password: await bcrypt.hash(validated.password, 10),
      avatar: `${uploadImagePath}/${req.file.filename}`
    }

    const createdAdmin = await prismaClient.admin.create({
      data: adminData
    });

    delete createdAdmin.password

    return res.status(200).json(createdAdmin)
  } catch (error) {
    return handleErrors(res, error)
  }
}