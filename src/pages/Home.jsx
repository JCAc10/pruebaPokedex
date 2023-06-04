import React, { useState, useEffect } from "react";

export default function Home({}) {
  const [nombrePokemon, setNombrePokemon] = useState("");
  const [pokemonEncontrado, setPokemonEncontrado] = useState(null);

  const handleChange = (event) => {
    setNombrePokemon(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`
      );
      const data = await response.json();

      setPokemonEncontrado(data);
    } catch (error) {
      console.log("Error al buscar el Pokémon:", error);
      setPokemonEncontrado(null);
    }
  };

  return (
    <div>
      <h1>Pokedex</h1>
      {pokemonEncontrado && (
        <div>
          <h2>{pokemonEncontrado.name}</h2>
          <h3>N° {pokemonEncontrado.id}</h3>
          <img
            src={pokemonEncontrado.sprites.other.dream_world.front_default}
            alt={pokemonEncontrado.name}
          />
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nombrePokemon}
          onChange={handleChange}
          placeholder="Ingresa un nombre"
        />
        <button type="submit">Buscar</button>
      </form>
      
    </div>
  );
}
