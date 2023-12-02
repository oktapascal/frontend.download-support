import { prisma } from "~/server/prisma";

export default defineEventHandler(async (event) => {
  const result = await prisma.am_fungsi.findMany({ where: { kode_lokasi: "11", flag_fungsi: 0 } });

  return { status: 200, message: "OK", result };
});
