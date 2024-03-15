import "./App.css";
import { useState, useEffect } from "react";
import Axios  from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [nombre, setNombre] = useState("");
  const [apellido, setapellido] = useState("");
  const [fechaNacimiento, setfechaNacimiento] = useState("");
  const [salario, setsalario] = useState("");
  const [departamentoId, setdepartamentoId] = useState(0);
  const [empleadosList, setEmpleados] = useState([]);
  const [editar, setEditar] = useState([]);


 

  const add = ()=>{
    Axios.post("http://localhost:3002/create", {
      nombre:nombre,
      apellido:apellido,
      fechaNacimiento:fechaNacimiento,
      salario:salario,
      departamentoId:departamentoId
    }).then(()=>{
      getEmpleados()
      alert("Empleado registrado")
    });
  };

  // El metodo get agrega a un response todos los datos que se han llamado al 
  // microservicio
  const getEmpleados = () => {
    Axios.get("http://localhost:3002/obtenerEmpleado").then((response)=>{
      setEmpleados(response.data);
    });  
  };

  const editarEmpleado = (val)=>{
    setEditar(true);
    setNombre(val.NOMBRE);
    setNombre(val.APELLIDO);

  }

  useEffect(() => {
    getEmpleados();
  }, []);


  return (
    <div className="App">
      <div className="datos">
        <label>
          Nombre:
          <input
            onChange={(event) => {
              setNombre(event.target.value);
            }}
            type="text"
          />
        </label>
        <br />
        <label>
          Apellido:
          <input
            onChange={(event) => {
              setapellido(event.target.value);
            }}
            type="text"
          />
        </label>
        <br />

        <label>
          Fecha de Nacimiento:
          <input
            onChange={(event) => {
              setfechaNacimiento(event.target.value);
            }}
            type="date"
          />
        </label>
        <br />

        <label>
          Salario:
          <input
            onChange={(event) => {
              setsalario(event.target.value);
            }}
            type="number"
          />
        </label>
        <br />

        <label>
          Nombre de departamento:
          <input
            onChange={(event) => {
              setdepartamentoId(event.target.value);
            }}
            type="number"
          />
        </label>
        <br />
        <button className="btn btn-success" onClick={add} >Registrar</button>
      </div>
      <div className="lista">
            {/* <button onClick={getEmpleados}>Listar</button> */}
            {
              empleadosList.map((value, key)=>{
                return <tr key={value.EMPLEADO_ID}>
                  <th>{value.NOMBRE}</th>
                  <th>{value.APELLIDO}</th>
                  <th>{value.EMPLEADO_ID}</th>

                </tr> 
              })
            }
      </div>

    </div>
  );
}

export default App;
