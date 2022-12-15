import { handleErrors } from "../../../../helpers/haddle-error.js";
import { prismaClient } from "../../../../helpers/prisma-client.js";
import { uploadImagePath } from "../../../../middlewares/uploader.js";

export const UpdateOnsenController = async (req, res) => {
  try {
    const onsenId = req.params.id;
    const { name, price, policy, about, deposit } = req.body;
    const onsenData = {};

    if (name) {
      onsenData.name = name;
    }

    if (price) {
      onsenData.price = price;
    }

    if (policy) {
      onsenData.policy = policy;
    }

    if (about) {
      onsenData.about = about;
    }

    if (deposit) {
      onsenData.deposit = parseInt(deposit);
    }

    const updateData = {
      ...onsenData
    }

    if (req.file) {
      const imageData = {
        url: `${uploadImagePath}/${req.file.filename}`,
      }
      updateData.images = { create: [imageData] }
    }

    const createdOnsen = await prismaClient.onsen.update(
      {
        where: {
          id: onsenId
        }
      },
      {
        data: updateData
      }
    );

    return res.status(200).json(createdOnsen)
  } catch (error) {
    return handleErrors(res, error)
  }
}