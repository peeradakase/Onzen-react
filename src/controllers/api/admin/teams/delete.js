import { handleErrors } from "../../../../helpers/haddle-error.js"
import { prismaClient } from "../../../../helpers/prisma-client.js";

export const DeleteAdminController = async (req, res) => {
  try {
    const adminId = parseInt(req.params.id);
    const admin = await prismaClient.admin.delete({
      where: {
        id: adminId
      }
    })

    return res.status(200).json(admin)
  } catch (error) {
    return handleErrors(res, error)
  }
}