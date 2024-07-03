import { Idioma } from "./idioma";
import { Tipo_Test } from "./tipo_test";

export interface Test {
    id_test: number;
    nombre: string;
    id_tipo_test: number;
    n_preguntas: number;
    id_idioma: number;
    n_version: number;
    descripcion: string;

    tipo_test: Tipo_Test;
    idioma: Idioma;
}