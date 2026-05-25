"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import api from "@/api/api";
import { CharacterT } from "../../types/RicardoYMortirio";

const CharacterDetailPage = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState<CharacterT | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchCharacter = () => {
    setLoading(true);

    api
      .get(`/character/${id}`)
      .then((e) => {
        const data: CharacterT = e.data;
        setCharacter(data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCharacter();
  }, [id]);

  if (loading) {
    return <h1 className="loading">Loading...</h1>;
  }

  return (
    <main>
      <Link className="volver" href="/">Volver</Link>

      {character && (
        <section className="detail">
          <img src={character.image} alt={character.name} />

          <div>
            <h1>{character.name}</h1>
            <p>ID: {character.id}</p>
            <p>Género: {character.gender}</p>
            <p>Estado: {character.status}</p>
            <p>Especie: {character.species}</p>
            <p>Origen: {character.origin.name}</p>
            <p>Location: {character.location.name}</p>
          </div>
        </section>
      )}
    </main>
  );
};

export default CharacterDetailPage;