import React from "react";
import "./card.css"
import { Link } from "react-router-dom";
import { Curso } from "../declarations/type";

const CursoCard: React.FC<{ curso: Curso }> = ({ curso }) => {
  return (
    <div className="curso-card">
      <h2>{curso.nombre}</h2>
      <p>{curso.descripcion}</p>
      <div className="Horario">
      <h4>Horario:</h4>
      <div className="horario-lista">
      {curso.horario.map((h, index) => (
        <span key={index} className="horario-item">
          {`${h.date} - ${h.time}`}
        </span>
      ))}
      </div>
      </div>
      
      <Link to={`/curso/${curso.nombre}`}>Ver detalles</Link>
    </div>
  );
};

export default CursoCard;