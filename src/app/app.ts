import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pokemon } from './shared/models/pokemon';
import { PokemonList } from './components/pokemon-list/pokemon-list';


@Component({
  imports: [RouterOutlet, PokemonList],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
  standalone: true,
})
export class App {
  protected title = 'Pokemon Explorer';
}
