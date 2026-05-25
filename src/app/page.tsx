"use client";

import { useEffect, useState } from "react";
import api from "@/api/api";
import { CharacterT, ResultCharactersT } from "./types/RicardoYMortirio";
import CharacterChulangano from "./components/CharacterChulangano";
import Filtros from "./components/Filtros";
import Paginador from "./components/Paginador";

const Home = () => {
  const [resultCharacters, setResultCharacters] =
    useState<ResultCharactersT | null>(null);
  const [characters, setCharacters] = useState<CharacterT[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("Dead");
  const [gender, setGender] = useState("Female");
  const [nameInput, setNameInput] = useState("");
  const [name, setName] = useState("");

  const totalPages = resultCharacters ? resultCharacters.info.pages : 1;

  const fetchCharacters = () => {
    setLoading(true);
    setError("");

    let url = `/character?page=${page}`;
    url += `&status=${status.toLowerCase()}`;
    url += `&gender=${gender.toLowerCase()}`;

    if (name !== "") {
      url += `&name=${name}`;
    }

    api
      .get(url)
      .then((e) => {
        const data: ResultCharactersT = e.data;

        setResultCharacters(data);
        setCharacters(data.results);
      })
      .catch(() => {
        if (page !== 1) {
          setPage(1);
        } else {
          setResultCharacters(null);
          setCharacters([]);
          setError("No existen resultados.");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCharacters();
  }, [page, status, gender, name]);

  if (loading) {
    return <h1 className="loading">Loading...</h1>;
  }

  return (
    <main>
      <h1>Buscador de personajes de la increible serie de Ricardo y Mortirio (Rick and Morty)</h1>

      <Filtros
        status={status}
        gender={gender}
        nameInput={nameInput}
        setStatus={setStatus}
        setGender={setGender}
        setNameInput={setNameInput}
        setName={setName}
        setPage={setPage}
      />

      {error && <h2>{error}</h2>}

      {!error && characters.length === 0 && <h2>No existen resultados.</h2>}

      <section className="characters-list">
        {characters.map((e) => (
          <CharacterChulangano key={e.id} personaje={e} />
        ))}
      </section>

      {!error && resultCharacters && (
        <Paginador page={page} totalPages={totalPages} setPage={setPage} />
      )}
    </main>
  );
};

export default Home;