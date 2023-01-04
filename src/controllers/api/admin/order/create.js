import { handleErrors } from "../../../../helpers/haddle-error.js";
import { prismaClient } from "../../../../helpers/prisma-client.js";

export const CreateOrderController = async (req, res) => {
  try {
    const { payment, adult, children, total, status, onzenId, userId } =
      req.body;

    const data = {
      bookingDate: new Date(),
      payment,
      adult,
      children,
      total,
      status,
      onzenId,
      userId,
    };

    const onsenData = await prismaClient.order.create({
      data
    });

    return res.status(200).json(onsenData);
  } catch (error) {
    return handleErrors(res, error);
  }
};
