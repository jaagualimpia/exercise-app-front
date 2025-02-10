import { NextResponse } from "next/server";

export async function GET() {
    // const apiUrl = process.env["API_URL"] + "weight"
    // let thing = await fetch(apiUrl, {method: "GET"})
    // const data = await thing.json()
    
    return NextResponse.json({hola: "string"})
}