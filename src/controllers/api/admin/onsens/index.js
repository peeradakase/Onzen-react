import { defaultLimit, firstPage, getPaginationInfo } from "../../../../helpers/pagination.js";
import { prismaClient } from "../../../../helpers/prisma-client.js";

export const ListOnsensController = async (req, res) => {
  try {
    const page = parseInt(req.query.page || firstPage);
    const limit = parseInt(req.query.limit || defaultLimit);
    const paginationInfo = getPaginationInfo(page, limit);

    const onsens = await prismaClient.onsen.findMany({
      skip: paginationInfo.skip,
      take: paginationInfo.limit,
      orderBy: {
        createdAt: "desc"
      },
      include: {
        images: true
      }
    });

    const total = await prismaClient.onsen.count();

    return res.status(200).json({
      data: onsens,
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