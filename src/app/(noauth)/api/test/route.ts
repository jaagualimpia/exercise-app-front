import { NextResponse } from "next/server";

export async function GET() {

    let thing = await fetch("http://localhost:8000/api/v1.0/base", {method: "GET"})
    const data = await thing.json()
    return NextResponse.json(data)
}