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

  // Let the parent component react to a card being opened
  onPokemonOpened(pokemon: Pokemon): void {

    console.warn('Opened: ', pokemon.name);
  }
}
