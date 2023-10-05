import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { Pokemon } from 'src/app/models/Pokemon';
import { PokeApiService } from 'src/app/services/poke-api/poke-api.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  value = '';
  @Output() getPokemon = new EventEmitter<Pokemon>();
  keyboardEvents: Record<string, () => void> = {
    Enter: () => this.searchPokemon(),
    Escape: () => {
      this.value = '';
      this.getPokemon.emit();
    },
  };

  constructor(private pokeApiService: PokeApiService) {}

  handleKeyboardEvent({ key }: KeyboardEvent): void {
    if (this.keyboardEvents[key]) {
      this.keyboardEvents[key]();
    }
  }

  async searchPokemon(): Promise<void> {
    if (!this.value) return;
    const pokemon = await this.pokeApiService.getPokemon(this.value);
    this.getPokemon.emit(pokemon);
  }
}
