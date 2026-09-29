import { Component, input, output } from '@angular/core';
import { Pokemon } from '../../shared/models/pokemon';

@Component({
  imports: [],
  selector: 'app-pokemon-list-item',
  styleUrl: './pokemon-list-item.scss',
  templateUrl: './pokemon-list-item.html',

  standalone: true,
})
export class PokemonListItem {
  pokemon = input.required<Pokemon>();
  //Two way data binding

  //Boolean to track if the card was clicked on
  expanded = false;
  opened = output<Pokemon>();

  toggle(): void {
    this.expanded = !this.expanded;
    this.opened.emit(this.pokemon());
  }
}
