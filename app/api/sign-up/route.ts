import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);

    await connectMongoDB();
    await User.create({ firstName, lastName, email, password: hashedPassword });

    console.log(firstName, lastName, email, password);
    return NextResponse.json({ message: "User Signed up" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error occurred while registering the user" },
      { status: 500 }
    );
  }
}
