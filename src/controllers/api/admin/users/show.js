import { handleErrors } from "../../../../helpers/haddle-error.js";
import { prismaClient } from "../../../../helpers/prisma-client.js";

export const ShowUserController = async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const user = await prismaClient.user.findUnique({
      where: {
        id: userId
      }
    })

    return res.status(200).json(user);
  } catch (error) {
    return handleErrors(res, error)
  }
}