// app/api/todo/[id]/route.ts

import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/db";

export async function PATCH(
  req: NextRequest,
  context: { params: { id: string } } // ✅ correct typing (string from URL)
) {
  const id = Number(context.params.id); // ✅ convert string to int
  const { complete } = await req.json();

  try {
    const updated = await prisma.todos.update({
      where: { id }, // id is now a number
      data: { complete },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error("PATCH error:", error);
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  }
}
