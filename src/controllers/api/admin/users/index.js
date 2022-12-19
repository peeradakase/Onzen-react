import { defaultLimit, firstPage, getPaginationInfo } from "../../../../helpers/pagination.js";
import { handleErrors } from '../../../../helpers/haddle-error.js';
import { prismaClient } from "../../../../helpers/prisma-client.js";

export const ListUsersController = async (req, res) => {
  try {
    const page = parseInt(req.query.page || firstPage);
    const limit = parseInt(req.query.limit || defaultLimit);
    const paginationInfo = getPaginationInfo(page, limit);

    const users = await prismaClient.user.findMany({
      skip: paginationInfo.skip,
      take: paginationInfo.limit,
      orderBy: {
        createdAt: "desc"
      }
    });

    const total = await prismaClient.user.count();

    return res.status(200).json({
      data: users,
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