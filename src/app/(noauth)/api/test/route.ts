import { NextResponse } from "next/server";

export async function GET() {

    let thing = await fetch("http://localhost:3000/")
    return NextResponse.json({
        result: process.env["env_variable"]
    })
}