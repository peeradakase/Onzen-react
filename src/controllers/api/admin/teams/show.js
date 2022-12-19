import { prismaClient } from "../../../../helpers/prisma-client.js";

export const ShowTeamController = async (req, res) => {
  try {
    const adminId = parseInt(req.params.id);
    const admin = await prismaClient.admin.findUnique({
      where: {
        id: adminId
      }
    })

    return res.status(200).json(admin);
  } catch (error) {
    return handleErrors(res, error)
  }
}