import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
    const product = await prisma.product.findMany()
    return NextResponse.json(product)
}