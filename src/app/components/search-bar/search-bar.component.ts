import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Output,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

import { Pokemon } from 'src/app/models/Pokemon';
import { PokeApiService } from 'src/app/services/poke-api/poke-api.service';
import { LoadBarService } from 'src/app/services/load-bar/load-bar.service';

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
  @ViewChild('loadBar', { read: ViewContainerRef }) loadBar!: ViewContainerRef;
  keyboardEvents: Record<string, () => void> = {
    Enter: () => this.searchPokemon(),
    Escape: () => {
      this.value = '';
      this.getPokemon.emit();
    },
  };

  constructor(
    private pokeApiService: PokeApiService,
    private snackbarService: SnackbarService,
    private loadBarService: LoadBarService
  ) {}

  handleKeyboardEvent({ key }: KeyboardEvent): void {
    if (this.keyboardEvents[key]) {
      this.keyboardEvents[key]();
    }
  }

  async searchPokemon(): Promise<void> {
    if (!this.value) return;
    try {
      this.loadBarService.addLoadBar(this.loadBar);
      const pokemon = await this.pokeApiService.getPokemon(this.value);
      this.getPokemon.emit(pokemon);
    } catch (err) {
      this.snackbarService.showErrorLog('Pokemon not found!');
    } finally {
      this.loadBarService.closeLoadBar(this.loadBar);
    }
  }
}
