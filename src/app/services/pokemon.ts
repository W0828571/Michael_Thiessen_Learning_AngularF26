import { computed, Service, signal } from '@angular/core';
import { Pokemon } from '../shared/models/pokemon';

@Service()
export class PokemonService {
  private listOfPokemon = signal<Pokemon[]>([
    { id: 1, name: 'bulbasaur', type1: 'grass', type2: 'poison', baseExperience: 64 },
    { id: 2, name: 'ivysaur', type1: 'grass', type2: 'poison', baseExperience: 142 },
    { id: 3, name: 'venusaur', type1: 'grass', type2: 'poison', baseExperience: 236 },
    { id: 4, name: 'charmander', type1: 'fire', baseExperience: 62 },
    { id: 5, name: 'charmeleon', type1: 'fire', baseExperience: 142 },
    { id: 6, name: 'charizard', type1: 'fire', type2: 'flying', baseExperience: 267 },
    { id: 7, name: 'dragonite', type1: 'dragon', type2: 'flying', baseExperience: 3000 },
  ]);
  pokemonList = this.listOfPokemon.asReadonly();
  pokemonCount = computed(() => this.pokemonList().length);

  dualTypePokemon = computed(() => this.pokemonList().filter((p) => p.type2));
  dualTypePokemonCount = computed(() => this.dualTypePokemon().length);


  addPokemon(p: Pokemon): void {
    this.listOfPokemon.update((list) => [...list, p]);
  }
  removePokemon(id: number): void {
    this.listOfPokemon.update((list) => list.filter((p) => p.id !== id));
  }
}
