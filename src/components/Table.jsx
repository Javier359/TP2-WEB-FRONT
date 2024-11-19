import React, { useState, useEffect } from "react";
import axios from "axios";

const Table = ({ search }) => {
  const [students, setStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [totalStudents, setTotalStudents] = useState(0);

  const fetchStudents = async () => {
    try {
      // Obtener el token desde localStorage
      const token = localStorage.getItem("token");
  
      if (!token) {
        alert("Debes iniciar sesión para acceder a los estudiantes");
        return;
      }
  
      // Hacer la solicitud GET con el token en los encabezados
      const response = await axios.get("http://localhost:3000/api/students", {
        params: {
          search,
          currentPage,
          pageSize,
        },
        headers: {
          Authorization: `Bearer ${token}`, // Incluir el token en los encabezados
        },
      });
  
      setStudents(response.data.rows);
      setTotalStudents(response.data.count);
    } catch (error) {
      console.error("Error al obtener estudiantes:", error);
      alert("Error al cargar estudiantes.");
    }
  };
  

  const borrado = async (id) => {
    console.log(id);

    try {
      const token = localStorage.getItem('token'); // Obtener el token
      if (!token) {
        alert('Debes iniciar sesión para eliminar estudiantes');
        return;
      }

      const response = await axios.put(`http://localhost:3000/api/students/${id}`, null, {
        headers: {
          Authorization: `Bearer ${token}`,  // Incluir el token en los encabezados
        },
      });
      fetchStudents();
      console.log(response);
    } catch (error) {
      console.error("Error al borrar el estudiante", error);
      alert('No se pudo eliminar el estudiante');
    }
  };

  useEffect(() => {
    fetchStudents();
  }, [search, currentPage, pageSize]);

  const totalPages = Math.ceil(totalStudents / pageSize);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handlePageSizeChange = (e) => {
    setPageSize(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Legajo</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.sid}</td>
              <td>{student.firstname}</td>
              <td>{student.lastname}</td>
              <td>
                <button type="button" className="div_btn back" onClick={() => borrado(student.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination-container m-auto">
        <label htmlFor="rowsPerPage">Total: {totalStudents} - Ítems por página:</label>
        <select id="rowsPerPage" onChange={handlePageSizeChange} value={pageSize}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>

        <div id="pagination">
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            Anterior
          </button>
          <span> Página {currentPage} de {totalPages} </span>
          <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
