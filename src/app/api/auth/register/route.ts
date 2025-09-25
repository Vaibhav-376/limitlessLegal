import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/client";
import bcrypt from "bcryptjs";

export async function POST(Request:NextRequest){
    const {name,email,password} = await Request.json();

    if(!name || !email || !password){
        return NextResponse.json({error:"All fields are required"},{status:400});
    }

    const userExists = await prisma.user.findUnique({
        where:{email:email}
    })
    if(userExists){
        return NextResponse.json({error:"User already Exists"},{status:400});
    }

    const hashedPassword = await bcrypt.hash(password,10);

    const user  = await prisma.user.create({
        data:{
            name,
            email,
            password:hashedPassword
        }
    })

    return NextResponse.json(user)
}