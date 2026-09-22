import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pokemon } from './shared/models/pokemon';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  // initialized array with 6 objects
  public pokemonList: Pokemon[]= [
    {id: 1, name: 'bulbasaur', type1: 'grass', type2: 'poison', baseExperience:64},
    {id: 2, name: 'ivysaur', type1: 'grass', type2: 'poison', baseExperience:142},
    {id: 3, name: 'venusaur', type1: 'grass', type2: 'poison', baseExperience:236},
    {id: 4, name: 'charmander', type1: 'fire',baseExperience:62},
    {id: 5, name: 'charmeleon', type1: 'fire', baseExperience:142},
    {id: 6, name: 'charizard', type1: 'fire', type2: 'flying', baseExperience:267},
  ];
}
