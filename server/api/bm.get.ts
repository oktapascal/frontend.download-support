import { prisma } from "~/server/prisma";

export default defineEventHandler(async (event) => {
  const result = await prisma.am_bm.findMany({ where: { kode_lokasi: "11" } });

  return { status: 200, message: "OK", result };
});
