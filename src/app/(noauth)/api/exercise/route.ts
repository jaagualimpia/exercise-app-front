import { NextResponse } from "next/server"

export async function GET() {
    const apiUrl = process.env["API_URL"] + "exercise"
    let thing = await fetch(apiUrl, {method: "GET"})
    const data = await thing.json()
    return NextResponse.json(data)
}

export async function POST(req: Request){
    const data = await req.json()
    const apiUrl = process.env["API_URL"] + "exercise"
    
    const response = await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        }
    })
    
    return NextResponse.json(response)
}