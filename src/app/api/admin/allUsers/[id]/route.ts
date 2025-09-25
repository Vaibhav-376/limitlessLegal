import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../../prisma/client";

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const user = await prisma.user.delete({ where: { id: id } });
    return NextResponse.json({ message: "User Deleted", user });
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const body = await request.json();
    const user = await prisma.user.update({ where: { id: id }, data: body });
    return NextResponse.json({ message: "User Updated", user });
}