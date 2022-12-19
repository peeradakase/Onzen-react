import bcrypt from 'bcrypt';
import { handleErrors } from '../../../../helpers/haddle-error.js';
import { prismaClient } from '../../../../helpers/prisma-client.js';
import { uploadImagePath } from '../../../../middlewares/uploader.js';

export const CreateTeamController = async (req, res) => {
  try {
    const { name, email, phoneNumber, password, role } = req.body;
    console.log(password, ' :password');
    const adminData = {
      name,
      email,
      phoneNumber,
      role,
      password:  await bcrypt.hash(password, 10),
      avatar: `${uploadImagePath}/${req.file.filename}`
    }

    const createdAdmin = await prismaClient.admin.create({
      data: adminData
    });

    return res.status(200).json(createdAdmin)
  } catch (error) {
    return handleErrors(res, error)
  }
}