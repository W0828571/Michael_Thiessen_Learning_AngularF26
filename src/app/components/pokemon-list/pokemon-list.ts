import { Component } from '@angular/core';
import { Pokemon } from '../../shared/models/pokemon';
import { PokemonListItem } from '../pokemon-list-item/pokemon-list-item';

@Component({
  imports: [PokemonListItem],
  selector: 'app-pokemon-list',
  styleUrl: './pokemon-list.scss',
  templateUrl: './pokemon-list.html',
  standalone: true,
})
export class PokemonList {
  // initialized array with 6 objects
  public pokemonList: Pokemon[] = [
    { id: 1, name: 'bulbasaur', type1: 'grass', type2: 'poison', baseExperience: 64 },
    { id: 2, name: 'ivysaur', type1: 'grass', type2: 'poison', baseExperience: 142 },
    { id: 3, name: 'venusaur', type1: 'grass', type2: 'poison', baseExperience: 236 },
    { id: 4, name: 'charmander', type1: 'fire', baseExperience: 62 },
    { id: 5, name: 'charmeleon', type1: 'fire', baseExperience: 142 },
    { id: 6, name: 'charizard', type1: 'fire', type2: 'flying', baseExperience: 267 },
    {id: 7, name: 'dragonite', type1: 'dragon', type2: 'flying', baseExperience: 3000}
  ];

  // Let the parent component react to a card being opened
  onPokemonOpened(pokemon: Pokemon): void {
    //Place holder for now
    console.warn('Opened: ', pokemon.name);
  }
}
