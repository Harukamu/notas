export interface Horario {
    date: string;  // Ejemplo: "Lunes"
    time: string;  // Ejemplo: "9AM"
  }
  
  // Interfaz para las fechas
  export interface Fecha {
    id: number;
    fecha: Date;  // La fecha real, en formato Date
    contenido: string;  // Contenido asociado a esa fecha
  }
  
  // Interfaz para los cursos
  export interface Curso {
    nombre: string;
    descripcion: string;
    horario: Horario[]
    fechas: Fecha[]  
  }
  