import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/db";

export async function POST(req: NextRequest) {
  try {
    const userId = req.headers.get("x-user-id");
    if(userId){
    const { name, url } = await req.json();
    const endpoint = await prisma.endpoint.create({
      data: { name, url, userId },
    });
    return NextResponse.json(endpoint);
  }else{
    return NextResponse.json({message:"Invalid"});
  }
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to create endpoint" }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    // Extract userId from headers set by middleware
    const userId = req.headers.get("x-user-id");
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const endpoints = await prisma.endpoint.findMany({
      where: { userId }, // fetch only endpoints for this user
      orderBy: { createdAt: "desc" },
      include: { checks: true },
    });

    return NextResponse.json(endpoints);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch endpoints" },
      { status: 500 }
    );
  }
}