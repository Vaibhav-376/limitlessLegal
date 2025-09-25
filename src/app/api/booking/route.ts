import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { id: slotId, name, email, phone } = body;

    if (!slotId || !name || !email || !phone) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const slot = await prisma.slot.findUnique({ where: { id: slotId } });
    if (!slot) return NextResponse.json({ error: "Slot not found" }, { status: 404 });
    if (slot.booked) return NextResponse.json({ error: "Slot already booked" }, { status: 400 });

    const booking = await prisma.booking.create({
      data: {
        slot: { connect: { id: slotId } },
        name,
        email,
        phone,
      },
    });

    await prisma.slot.update({
      where: { id: slotId },
      data: { booked: true },
    });

    return NextResponse.json(booking, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to book slot" }, { status: 500 });
  }
}
