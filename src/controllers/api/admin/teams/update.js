import { handleErrors } from "../../../../helpers/haddle-error.js";
import { prismaClient } from "../../../../helpers/prisma-client.js";
import { uploadImagePath } from "../../../../middlewares/uploader.js";

export const UpdateAdminController = async (req, res) => {
  try {
    const adminId = parseInt(req.body.id || req.params.id);
    const { name, email, phoneNumber, role, password } = req.body;
    const adminData = {};

    if (name) {
      adminData.name = name;
    }

    if (email) {
      adminData.email = email;
    }

    if (phoneNumber) {
      adminData.phoneNumber = phoneNumber;
    }

    if (role) {
      adminData.role = role;
    }

    if (password) {
      adminData.password = password;
    }

    if (req.file) {
      adminData.avatar = `${uploadImagePath}/${req.file.filename}`
    }

    const createdAdmin = await prismaClient.admin.update(
      {
        where: {
          id: adminId
        },
        data: adminData
      }
    );

    return res.status(200).json(createdAdmin)
  } catch (error) {
    return handleErrors(res, error)
  }
}