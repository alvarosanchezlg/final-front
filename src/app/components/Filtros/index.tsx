import { FormEvent } from "react";
import "./styles.css";

const estados = ["Dead", "Alive", "unknown"];
const generos = ["Female", "Male", "Genderless", "unknown"];

const Filtros = ({
  status,
  gender,
  nameInput,
  setStatus,
  setGender,
  setNameInput,
  setName,
  setPage,
}: {
  status: string;
  gender: string;
  nameInput: string;
  setStatus: (status: string) => void;
  setGender: (gender: string) => void;
  setNameInput: (name: string) => void;
  setName: (name: string) => void;
  setPage: (page: number) => void;
}) => {
  const cambiarEstado = () => {
    const index = estados.indexOf(status);
    const next = estados[(index + 1) % estados.length];

    setStatus(next);
    setPage(1);
  };

  const cambiarGenero = () => {
    const index = generos.indexOf(gender);
    const next = generos[(index + 1) % generos.length];

    setGender(next);
    setPage(1);
  };

  const buscarNombre = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setName(nameInput);
    setPage(1);
  };

  return (
    <div className="filtros">
      <button onClick={cambiarEstado}>Estado: {status}</button>

      <button onClick={cambiarGenero}>Género: {gender}</button>

      <form onSubmit={buscarNombre}>
        <input
          value={nameInput}
          placeholder="Filtrar por nombre"
          onChange={(e) => setNameInput(e.target.value)}
        />

        <button type="submit">Buscar</button>
      </form>
    </div>
  );
};

export default Filtros;