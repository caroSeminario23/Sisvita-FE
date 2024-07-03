import { Escala } from "./escala";
import { Especialista } from "./especialista";
import { Estado } from "./estado";
import { Evaluacion } from "./evaluacion";

export interface Resultado{
    id_resultado: number;
    id_evaluacion: number;
    id_especialista: number;
    id_estado: number;
    id_escala: number;
    fec_interpretacion: Date;
    observacion: string;

    evaluacion: Evaluacion;
    especialista: Especialista;
    estado:Estado;
    escala:Escala;
}