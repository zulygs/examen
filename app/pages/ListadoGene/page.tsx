"use client";

import * as React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useEffect, useState } from "react";

export default function ClientList() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await fetch("/api/Listadogeneral");
        if (!response.ok) {
          throw new Error("Error al obtener los clientes");
        }
        const data = await response.json();
        setClientes(data);
      } catch (error) {
        console.error("Error al cargar los clientes:", error);
      }
    };

    fetchClientes();
  }, []);

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Listado de Clientes</CardTitle>
        <CardDescription>
          A continuación se muestra la información de los clientes registrados.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {clientes.length > 0 ? (
          clientes.map((cliente) => (
            <div key={cliente.ID} className="border-b py-4">
              <h3 className="font-semibold">{`${cliente.nombres} ${cliente.apellidos}`}</h3>
              <p>Género: {cliente.genero}</p>
              <p>Fecha de Nacimiento: {cliente.fechanacimiento}</p>
              <p>Dirección: {cliente.Direccion}</p>
              <p>Teléfono: {cliente.telefono}</p>
              <p>Institución Financiera: {cliente.ifinanciera}</p>
              <p>Fecha de Creación: {cliente.fechaCreacion}</p>
              <p>Usuario Creador: {cliente.usuarioCreador}</p>
            </div>
          ))
        ) : (
          <p>No hay clientes registrados.</p>
        )}
      </CardContent>
      <CardFooter className="flex justify-end">
        {/* Puedes agregar más acciones aquí si lo deseas */}
      </CardFooter>
    </Card>
  );
}
