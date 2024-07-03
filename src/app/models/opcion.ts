import { Test } from "./test";

export interface Opcion{
    id_opcion: number;
    id_test: number;
    nombre: string;
    puntaje: number;
    orden: number;
    descripcion: string;

    test: Test;
}