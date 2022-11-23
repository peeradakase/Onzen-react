
import { prismaClient } from '../../../helpers/prisma-client.js';

export const OnsenListsController = async (req, res) => {
  const onsens = await prismaClient.onsen.findMany({
    orderBy: {
      id: "asc"
    },

    include: {
      images: true
    }
  });

  if (!onsens) {
    return res.status(404).json({ message:"Can not find Product" })
  }
  res.json(onsens)
}
