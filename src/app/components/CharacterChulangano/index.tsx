import Link from "next/link";
import { CharacterT } from "../../types/RicardoYMortirio";
import "./styles.css";

const CharacterChulangano = ({ personaje }: { personaje: CharacterT }) => {
  return (
    <Link href={`/character/${personaje.id}`}>
      <div className="character-card">
        <img src={personaje.image} alt={personaje.name} />

        <div>
          <h2>{personaje.name}</h2>
          <p>Estado: {personaje.status}</p>
          <p>Género: {personaje.gender}</p>
        </div>
      </div>
    </Link>
  );
};

export default CharacterChulangano;