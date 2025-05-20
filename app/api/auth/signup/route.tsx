import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt'
import prisma from "@/app/lib/db";

export async function POST(req: NextRequest){

    //this will extract the body we are sending from the backend
    const { email, username, password} = await req.json();

    const existingUser = await prisma.user.findUnique({where: {username: username}})

    if(existingUser){
        return new Response(JSON.stringify({ error: "User already exists!" }), { status: 400 })
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await prisma.user.create({
        data: {
            email,
            username,
            password: hashedPassword
        }
    })

    return new Response(JSON.stringify({ message: "User created!", user }), { status: 201 });
    
    // return NextResponse.json({
    //     message: "you are sign up successfully"
    // })
}


