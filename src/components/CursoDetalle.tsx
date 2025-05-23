import React, {useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Curso } from "../declarations/type";

interface Props {
  cursos: Curso[];
}

const CursoDetalle: React.FC<Props> = ({ cursos }) => {
  const { nombre } = useParams(); // Obtenemos el nombre del curso desde la URL
  const curso = cursos.find(c => c.nombre === nombre);
  const navigate = useNavigate()

  const [contenidos, setContenidos] = useState<Record<number, string>>({});

  useEffect(() => {
    const storedContents = localStorage.getItem(`contenidos_${nombre || ""}`);
    if (storedContents) {
      setContenidos(JSON.parse(storedContents));
    }
  }, [nombre]);

  if (!curso) {
    return <p>Curso no encontrado</p>;
  }

  const handleContenidoChange = (id: number, value: string) => {
    setContenidos(prevContenidos => {
      const updatedContenidos = { ...prevContenidos, [id]: value };
      return updatedContenidos;
    });
  };

  const handleGuardar = () => {
    localStorage.setItem(`contenidos_${nombre || ""}`, JSON.stringify(contenidos));
    console.log("Guardado correctamente");
  };

  const handleRegresar = () => {
    navigate("/")
  }

  return (
    <div className="contenido">
      <h2>{curso.nombre}</h2>
      <p>{curso.descripcion}</p>
      <h4>Fechas:</h4>
      <ul>
        {curso.fechas.map(f => (
          <li key={f.id}>
            {f.fecha.toLocaleDateString()} - 
            <textarea 
             value={contenidos[f.id] || f.contenido || ""}
             onChange={(e) => handleContenidoChange(f.id, e.target.value)}
             placeholder="Escribe algo aquí..."   
            />
          </li>
        ))}
      </ul>
      <div className="buttons">
        <button onClick={handleRegresar}>Regresar a los cursos</button>
        <br />
        <button onClick={handleGuardar}>Guardar</button>
      </div>
    </div>
  );
};

export default CursoDetalle;