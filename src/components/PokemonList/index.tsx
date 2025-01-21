import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PokemonCard from '../PokemonCard' // Verifique se o caminho está correto
import { List, Modal, ModalContent } from './styles' // Importe suas estilizações
import fechar from '../../assets/images/close.png' // Corrija o nome da imagem se necessário

interface Pokemon {
  name: string
  image: string
  types: string[]
  onClick: () => void // Definindo que onClick é uma prop esperada
}

const PokemonList = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null)

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=500')
      .then(async (response) => {
        const fetchPokemons = response.data.results.map(
          async (pokemonSummary: any) => {
            const pokemonDetailsResponse = await axios.get(pokemonSummary.url)
            return {
              name: pokemonDetailsResponse.data.name,
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonDetailsResponse.data.id}.png`, // Usando arte oficial
              types: pokemonDetailsResponse.data.types.map(
                (t: any) => t.type.name
              )
            }
          }
        )
        const newPokemons = await Promise.all(fetchPokemons)
        setPokemons(newPokemons)
      })
      .catch((error) => console.error('Erro ao carregar pokémons:', error))
  }, [])

  const handlePokemonClick = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon)
    setModalVisible(true)
  }

  const closeModal = () => setModalVisible(false)

  return (
    <>
      <List>
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            image={pokemon.image}
            types={pokemon.types}
            onClick={() => handlePokemonClick(pokemon)}
          />
        ))}
      </List>
      {modalVisible && selectedPokemon && (
        <Modal className={modalVisible ? 'visivel' : ''}>
          <div className="overlay" onClick={closeModal}></div>
          <ModalContent>
            <header>
              <h4>{selectedPokemon.name}</h4>
              <img src={fechar} alt="Fechar" onClick={closeModal} />
            </header>
            <img src={selectedPokemon.image} alt={selectedPokemon.name} />
            <p>Types: {selectedPokemon.types.join(', ')}</p>
          </ModalContent>
        </Modal>
      )}
    </>
  )
}

export default PokemonList
