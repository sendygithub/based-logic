import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { message: "ID Twitter wajib diisi" },
      { status: 400 }
    );
  }

  const res = await fetch(
    `https://twitter135.p.rapidapi.com/v2/Following/?id=${id}&count=20`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": process.env.RAPIDAPI_KEY!,
        "x-rapidapi-host": "twitter135.p.rapidapi.com",
      },
    }
  );

  const data = await res.json();
  return NextResponse.json(data);
}
