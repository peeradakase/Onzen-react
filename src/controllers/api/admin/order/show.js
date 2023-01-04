import { handleErrors } from "../../../../helpers/haddle-error.js";
import { prismaClient } from "../../../../helpers/prisma-client.js";

export const ShowOrderController = async (req, res) => {
  try {
    const orderId = parseInt(req.params.id);
    const order = await prismaClient.order.findUnique({
      where: {
        id: orderId
      },
      include: {
        onzen: true,
        user: true
      }
    })

    return res.status(200).json(order);
  } catch (error) {
    return handleErrors(res, error)
  }
}