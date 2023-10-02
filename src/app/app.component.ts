import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { Pokemon } from './models/Pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [CommonModule, SearchBarComponent, PokemonCardComponent],
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  pokemon: Pokemon | null = null;

  handlePokemon(pokemon: Pokemon) {
    this.pokemon = pokemon;
  }
}
