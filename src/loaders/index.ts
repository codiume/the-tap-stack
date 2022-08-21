import { PrismaClient } from '@prisma/client';

// get articles from database
const prisma = new PrismaClient();

export const getArticles = async () => {
  return await prisma.article.findMany({
    select: {
      id: true,
      title: true,
      summary: true,
      date: true
    },
    orderBy: {
      date: 'asc'
    }
  });
};
