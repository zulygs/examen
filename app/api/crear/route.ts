import { NextRequest, NextResponse } from "next/server";
import { conn } from "@/app/utils/database";

export const POST = async (request: NextRequest) => {
  try {
    const JsonBody = await request.json();

    const query =
      "INSERT INTO clientes (ID, nombres, apellidos, genero, fechanacimiento,estado) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";
    const values = [
      JsonBody.ID,
      JsonBody.nombres,
      JsonBody.apellidos,
      JsonBody.genero,
      JsonBody.fechanacimiento,
      JsonBody.estado,
    ];

    const result = await conn.query(query, values);

    return new NextResponse(JSON.stringify("cliente: " + result.rows[0]), {
      status: 200,
    });
  } catch (error: any) {
    console.error("Error inserting cliente:", error);
    return new NextResponse("Error interno del servidor " + error.message, {
      status: 500,
    });
  }
};
