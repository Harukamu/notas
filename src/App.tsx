import React, {useEffect, useState} from "react";
import { Curso } from "./declarations/type";
import CursoCard from "./components/CursoCard";
import CursoDetalle from "./components/CursoDetalle";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './global.css'

  
const App: React.FC = () => {
  const [cursos, setCursos] = useState<Curso[]>([])

  useEffect(()=>{
    const cursosInicio: Curso[]=[
    { nombre: "IA FUNDAMENTALS", 
      descripcion: "", 
      horario: [{date:"Sábados", time:"9AM"}], 
      fechas:[{id:1, fecha: new Date('2025/04/05'),contenido: ''  },
              {id:2, fecha: new Date('2025/04/19'),contenido: ''  },
              {id:3, fecha: new Date('2025/04/26'),contenido: ''  },
              {id:4, fecha: new Date('2025/05/03'),contenido: ''  },
              {id:5, fecha: new Date('2025/05/10'),contenido: ''  },
              {id:6, fecha: new Date('2025/05/24'),contenido: ''  },
              {id:7, fecha: new Date('2025/05/31'),contenido: ''  },
              {id:8, fecha: new Date('2025/06/21'),contenido: ''  },
              {id:8, fecha: new Date('2025/06/28'),contenido: ''  },
              {id:9, fecha: new Date('2025/07/05'),contenido: ''  }
      ]},

    { nombre: "PROGRAMACION 101", 
      descripcion: "", 
      horario: [{date:"Miércoles", time:"7PM"}], 
      fechas:[{id:1, fecha: new Date('2025/04/02'),contenido: ''},
              {id:2, fecha: new Date('2025/04/09'),contenido: ''  },
              {id:3, fecha: new Date('2025/04/16'),contenido: ''  },
              {id:4, fecha: new Date('2025/04/19'),contenido: ''  },
              {id:5, fecha: new Date('2025/04/23'),contenido: ''  },
              {id:6, fecha: new Date('2025/04/26'),contenido: ''  },
              {id:7, fecha: new Date('2025/04/30'),contenido: ''  },
              {id:8, fecha: new Date('2025/05/07'),contenido: ''  },
              {id:9, fecha: new Date('2025/05/14'),contenido: ''  },
              {id:10, fecha: new Date('2025/05/21'),contenido: ''  },
              {id:11, fecha: new Date('2025/05/28'),contenido: ''  },
              {id:12, fecha: new Date('2025/06/04'),contenido: ''  },
              {id:13, fecha: new Date('2025/06/11'),contenido: ''  },
              {id:14, fecha: new Date('2025/06/18'),contenido: ''  },
              {id:15, fecha: new Date('2025/06/25'),contenido: ''  },
              {id:16, fecha: new Date('2025/07/02'),contenido: ''  },
              {id:17, fecha: new Date('2025/07/09'),contenido: ''  },
      ]},

    { nombre: "MATEMÁTICA PARA MACHINE LEARNING", 
      descripcion: "", 
      horario: [{date:"Sábados", time:"9AM"}], 
      fechas:[{id:1, fecha: new Date('2025/04/05'),contenido: ''},
        {id:2, fecha: new Date('2025/04/12'),contenido: ''  },
        {id:3, fecha: new Date('2025/04/26'),contenido: ''  },
        {id:4, fecha: new Date('2025/05/03'),contenido: ''  },
        {id:5, fecha: new Date('2025/05/10'),contenido: ''  },
        {id:6, fecha: new Date('2025/05/17'),contenido: ''  },
        {id:7, fecha: new Date('2025/05/24'),contenido: ''  },
        {id:8, fecha: new Date('2025/05/31'),contenido: ''  },
        {id:9, fecha: new Date('2025/06/14'),contenido: ''  },
        {id:10, fecha: new Date('2025//06/21'),contenido: ''  },
        {id:11, fecha: new Date('2025/06/28'),contenido: ''  },
        {id:12, fecha: new Date('2025/07/05'),contenido: ''  },
        {id:13, fecha: new Date('2025/07/12'),contenido: ''  },
      ]},

    { nombre: "LEADING AND COMMUNICATING FOR INFLUENCE", 
      descripcion: "", 
      horario: [{date:"Sábados", time:"9AM"}], 
      fechas:[{id:1, fecha: new Date('2025/04/12'),contenido: ''},
        {id:2, fecha: new Date('2025/05/17'),contenido: ''  },
        {id:3, fecha: new Date('2025/06/14'),contenido: ''  },
        {id:4, fecha: new Date('2025/07/12'),contenido: ''  },
      ]},
    ]
      setCursos(cursosInicio)
    },
  [])
  
  return (
    <Router>
      <div>
        <Routes>
          {/* Ruta principal que muestra todos los cursos */}
          <Route path="/" element={
            <div>
            <h1 className="title">Bienvenidos a los Cursos</h1>
            <div className="grid-container">
              {cursos.map((curso) => (
                <CursoCard key={curso.nombre} curso={curso} />
              ))}
            </div>
            </div>

          } />
          <Route path="/curso/:nombre" element={<CursoDetalle cursos={cursos} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App