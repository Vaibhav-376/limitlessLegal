import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/client";

export async function GET(){
    const users = await prisma.user.findMany({
        select:{id:true,name:true,email:true,isAdmin:true}
    })
    return NextResponse.json({message:"All Users",users})
}