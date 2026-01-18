import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function DELETE(request: Request) {
  try {
    // Ambil URL lengkap
    const url = new URL(request.url)
    
    // Ambil ID dari path
    const pathParts = url.pathname.split("/") // ['', 'api', 'product', '1']
    const idParam = pathParts[3] // index 3 = ID

    if (!idParam) {
      return NextResponse.json({ message: "ID tidak valid" }, { status: 400 })
    }

    const idNumber = Number(idParam) // jika schema Int
    if (isNaN(idNumber)) {
      return NextResponse.json({ message: "ID harus angka" }, { status: 400 })
    }

    // cek produk
    const product = await prisma.product.findUnique({
      where: { id: idNumber }
    })

    if (!product) {
      return NextResponse.json({ message: "Produk tidak ditemukan" }, { status: 404 })
    }

    // delete produk
    await prisma.product.delete({ where: { id: idNumber } })

    return NextResponse.json({ message: "Produk berhasil dihapus" }, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: "Gagal menghapus produk", error: (error as Error).message },
      { status: 500 }
    )
  }
}
