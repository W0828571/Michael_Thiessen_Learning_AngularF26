import { Component, inject } from '@angular/core';
import { Pokemon } from '../../shared/models/pokemon';
import { PokemonListItem } from '../pokemon-list-item/pokemon-list-item';
import { PokemonService } from '../../services/pokemon';

@Component({
  imports: [PokemonListItem],
  selector: 'app-pokemon-list',
  styleUrl: './pokemon-list.scss',
  templateUrl: './pokemon-list.html',
  standalone: true,
})
export class PokemonList {
  private pokemonService = inject(PokemonService);
  protected pokemonList = this.pokemonService.pokemonList;
  protected pokemonCount = this.pokemonService.pokemonCount;
  protected dualTypePokemonList = this.pokemonService.dualTypePokemon;
  protected onPokemonOpened(pokemon: Pokemon): void {
    console.log('Opened: ', pokemon.name);
  }
}
