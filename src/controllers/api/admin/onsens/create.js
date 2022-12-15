import { handleErrors } from "../../../../helpers/haddle-error.js";
import { prismaClient } from "../../../../helpers/prisma-client.js";
import { uploadImagePath } from "../../../../middlewares/uploader.js";

export const CreateOnsenController = async (req, res) => {
  try {
    const { name, price, policy, about, deposit } = req.body;
    const onsenData = {
      name,
      price,
      policy,
      about,
      deposit: parseInt(deposit)
    }

    const imageData = {
      url: `${uploadImagePath}/${req.file.filename}`,
    }

    const createdOnsen = await prismaClient.onsen.create({
      data: {
        ...onsenData,
        images: {
          create: [imageData]
        }
      }
    });

    return res.status(200).json(createdOnsen)
  } catch (error) {
    return handleErrors(res, error)
  }
}