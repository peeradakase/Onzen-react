import { handleErrors } from "../../../../helpers/haddle-error.js";
import { prismaClient } from "../../../../helpers/prisma-client.js";

export const ShowOnsenController = async (req, res) => {
  try {
    const onsenId = parseInt(req.params.id);
    const onsen = await prismaClient.onsen.findUnique({
      where: {
        id: onsenId
      },
      include: {
        images: true
      }
    })

    return res.status(200).json(onsen);
  } catch (error) {
    return handleErrors(res, error)
  }
}