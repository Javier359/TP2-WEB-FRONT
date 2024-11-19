import React from "react";
import NavBar from "../components/common/NavBar";
import { Route, Routes } from "react-router-dom";
import NewStudent from "../pages/NewStudent";
import Index from "../pages/Index";
import StudentModule from "../pages/StudentModule";
import Login from "../pages/Login";  // Asegúrate de importar el componente Login
import Register from "../pages/Register";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<NavBar title="Pagina Principal" />}>
        <Route index exact path="/" element={<Index></Index>}></Route>
      </Route>

      <Route element={<NavBar title="Alumnos" addStudentBtn={true} />}>
        <Route
          exact
          path="/students"
          element={<StudentModule></StudentModule>}
        ></Route>
      </Route>

      <Route element={<NavBar title="Agregar Estudiante" backBtn={true} />}>
        <Route
          exact
          path="/students/add"
          element={<NewStudent></NewStudent>}
        ></Route>
      </Route>

      <Route element={<NavBar title="Login de Usuario" backBtn={true} />}>
        <Route
          exact
          path="/login"
          element={<Login></Login>}
        ></Route>
      </Route>
      <Route exact path="/register" element={<Register></Register>}>
      </Route>
    </Routes>
  );
};

export default AppRouter;
