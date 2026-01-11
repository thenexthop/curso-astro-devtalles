import { createSignal, For } from "solid-js"
import type { FavoritePokemon } from "@/interfaces/favorite-pokemon"
import { FavoritePokemonCard } from "./FavoritePokemonCard"

const getLocalStoragePokemons = (): FavoritePokemon[] => {
    const favoritePokemons = JSON.parse(
        localStorage.getItem('favorites') ?? '[]'
    )

    return favoritePokemons
}

export const FavoritePokemons = () => {
    const [favorites, setFavorites] = createSignal(getLocalStoragePokemons())

    return (
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-4 mt-4">
            <For each={favorites()}>
                {(pokemon) => (
                    <FavoritePokemonCard pokemon={pokemon} />
                )}
            </For>
        </div>
    )
}