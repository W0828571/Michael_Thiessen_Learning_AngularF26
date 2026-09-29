import { Component, input } from '@angular/core';
import { Pokemon } from '../../shared/models/pokemon';
import {PokemonList} from '../pokemon-list/pokemon-list';

@Component({
  imports: [],
  selector: 'app-pokemon-list-item',
  styleUrl: './pokemon-list-item.css',
  templateUrl: './pokemon-list-item.html',

  standalone: true,
})
export class PokemonListItem {
  pokemon = input.required<Pokemon>();
}
