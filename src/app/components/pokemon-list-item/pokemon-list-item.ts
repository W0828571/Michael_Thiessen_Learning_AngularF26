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
  //Boolean to track if the card was clicked on
  expanded = false;
  opened = output<Pokemon>();
  removed = output<number>();
  toggle(): void {
    this.expanded = !this.expanded;
    this.opened.emit(this.pokemon());
  }

  remove(event: MouseEvent): void {
    // stop the click from bubbling up to the card's (click)="toggle()"
    event.stopPropagation();
    this.removed.emit(this.pokemon().id);
  }
}
