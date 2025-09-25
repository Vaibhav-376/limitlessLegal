import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/client";


export async function GET() {
  try {
    const slots = await prisma.slot.findMany({
      orderBy: { date: "asc" },
    });
    return NextResponse.json(slots);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch slots" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("BODY:", body);

    if (!body.date) {
      return NextResponse.json({ error: "Date is required" }, { status: 400 });
    }

    const slot = await prisma.slot.create({
      data: { date: new Date(body.date) },
    });

    return NextResponse.json(slot, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to add slot" }, { status: 500 });
  }
}
