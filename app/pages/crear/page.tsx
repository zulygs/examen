"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/uKt9Qy0ChwW
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import * as React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ClientRegistration() {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Nuevo Registro - Clientes</CardTitle>
        <CardDescription>
          Ingrese la información solicitada para registrar un nuevo cliente.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {/* ** Información del Cliente ** */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="nombres">Nombres</Label>
            <Input id="nombres" placeholder="Ingrese los Nombres" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="apellidos">Apellidos</Label>
            <Input id="apellidos" placeholder="Ingrese los Apellidos" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="genero">Género</Label>
            <Input id="genero" placeholder="Ingrese el Género" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="fechanacimiento">Fecha de Nacimiento</Label>
            <Input
              type="date"
              id="fechanacimiento"
              placeholder="Ingrese la Fecha de Nacimiento"
            />
          </div>
        </div>

        {/* ** Información Adicional del Cliente ** */}
        <div className="space-y-2">
          <Label htmlFor="direccion">Dirección</Label>
          <Input id="direccion" placeholder="Ingrese la Dirección" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="telefono">Teléfono</Label>
          <Input type="tel" id="telefono" placeholder="Ingrese el Teléfono" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="ifinanciera">Institución Financiera</Label>
          <Input
            id="ifinanciera"
            placeholder="Ingrese la Institución Financiera"
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-800 focus:outline-none dark:focus:ring-blue-800"
          type="submit"
        >
          Guardar
        </Button>
      </CardFooter>
    </Card>
  );
}
