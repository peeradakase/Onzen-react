import { handleErrors } from "../../../../helpers/haddle-error.js";
import { defaultLimit, firstPage, getPaginationInfo } from "../../../../helpers/pagination.js";
import { prismaClient } from "../../../../helpers/prisma-client.js";

export const ListOrdersController = async (req, res) => {
  try {
    const page = parseInt(req.query.page || firstPage);
    const limit = parseInt(req.query.limit || defaultLimit);
    const paginationInfo = getPaginationInfo(page, limit);

    const orders = await prismaClient.order.findMany({
      skip: paginationInfo.skip,
      take: paginationInfo.limit,
      orderBy: {
        createdAt: "desc"
      },
      include: {
        onzen: true,
        user: true
      }
    });

    const total = await prismaClient.order.count();

    return res.status(200).json({
      data: orders,
      pagination: {
        total,
        skip: paginationInfo.skip,
        limit,
        page
      }
    });
  } catch (error) {
    return handleErrors(res, error)
  }
}