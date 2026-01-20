import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // 1. Ambil ID dari params
    const {id} = await params;

    // Pastikan ID ada sebelum memanggil Prisma
    if (!id) {
      return NextResponse.json({ message: "ID tidak ditemukan" }, { status: 400 });
    }

    // 2. Proses hapus di Prisma
    await prisma.artikel.delete({
      where: {
        id: Number(id), // Ubah string ke angka
      },
    });

    return NextResponse.json({ message: "Berhasil dihapus" }, { status: 200 });
  } catch (error) {
    console.error("Prisma Error:", error);
    return NextResponse.json({ message: "Gagal menghapus data" }, { status: 500 });
  }
}