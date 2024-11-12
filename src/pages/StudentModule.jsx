import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Table from "../components/Table";

const StudentModule = () => {
  const { handleSubmit, register } = useForm();
  const [search, setSearch] = useState("");

  const onSubmit = (data) => {
    setSearch(data.inputLastNameValue); 
  };

  return (
    <div className="px-3">
      <nav className="navbar navbar-light">
        <form onSubmit={handleSubmit(onSubmit)} className="form-inline d-flex">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Buscar por Apellido"
            aria-label="Search"
            {...register("inputLastNameValue", {})}
          />
          <button className="div_btn ms-2" type="submit">
            Buscar
          </button>
        </form>
      </nav>

      <Table search={search} />
    </div>
  );
};

export default StudentModule;
