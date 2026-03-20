import { prisma } from "../prisma/client";

export const getUserById = async (id: string) => {
  return prisma.user.findUnique({
    where: { id },
  });
};