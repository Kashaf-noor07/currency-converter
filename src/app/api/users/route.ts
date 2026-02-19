import { NextResponse } from "next/server"
import { connectDB } from "@/src/lib/db"
import { User } from "@/src/models/User"

// CREATE USER
export async function POST(req: Request) {
  try {
    await connectDB()

    const body = await req.json()

    const user = await User.create(body)

    return NextResponse.json(user, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Error creating user" }, { status: 500 })
  }
}

// GET USERS
export async function GET() {
  try {
    await connectDB()

    const users = await User.find().sort({ createdAt: -1 })

    return NextResponse.json(users)
  } catch (error) {
    return NextResponse.json({ error: "Error fetching users" }, { status: 500 })
  }
}
