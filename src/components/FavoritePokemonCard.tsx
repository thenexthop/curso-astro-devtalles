import { createSignal, Show, type Component } from "solid-js";
import type { FavoritePokemon } from "@/interfaces/favorite-pokemon";

interface Props {
    pokemon: FavoritePokemon
}

export const FavoritePokemonCard: Component<Props> = ({ pokemon }) => {
    const [isVisible, setIsVisible] = createSignal(true)

    const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`

    const handleRemoveFavorite = () => {
        const favoritePokemons: FavoritePokemon[] = JSON.parse(
            localStorage.getItem('favorites') ?? '[]'
        )

        const newFavoritePokemons = favoritePokemons.filter(
            (p) => p.id !== pokemon.id
        )

        localStorage.setItem('favorites', JSON.stringify(newFavoritePokemons))

        setIsVisible(false)
    }

    return (
        <Show when={isVisible()}>
            <div class="flex flex-col items-center justify-center">
                <a href={`/pokemons/${pokemon.name}`}>
                    <img
                        src={imgSrc}
                        alt={pokemon.name}
                        width={90}
                        height={90}
                        style={`view-transition-name: img-${pokemon.name}`}
                    />
                    <p class="capitalize">#{pokemon.id} {pokemon.name}</p>
                </a>
                <button
                    onClick={handleRemoveFavorite}
                    class="text-sm font-medium bg-amber-200/20 text-amber-500 hover:text-amber-400 hover:cursor-pointer border border-amber-200/30 px-2 py-1 rounded mt-2">
                    Remover
                </button>
            </div>
        </Show>
    )
}
