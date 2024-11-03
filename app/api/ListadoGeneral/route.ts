import { NextRequest, NextResponse } from "next/server";
import { conn } from "@/app/utils/database";

export const GET = async (request: NextRequest) => {
  try {
    const query = `
      SELECT 
        c.ID,
        c.nombres,
        c.apellidos,
        c.genero,
        c.fechanacimiento,
        ci.Direccion,
        ci.fechaCreacion,
        ci.telefono,
        ci.ifinanciera,
        ci.fechaActualizacion,
        ci.usuarioCreador,
        ci.estadoInfo 
      FROM 
        clientes c 
      JOIN 
        clientesInfo ci ON c.ID = ci.idCliente 
      ORDER BY 
        ci.fechaCreacion, 
        c.apellidos;
    `;

    const result = await conn.query(query);

    return NextResponse.json(result.rows); // Devolver todos los resultados
  } catch (error: any) {
    console.error("Error consultando informacion de clientes:", error);
    return new NextResponse("Error interno del servidor " + error.message, {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }
};
