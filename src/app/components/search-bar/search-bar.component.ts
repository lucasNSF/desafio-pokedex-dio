import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { PokeApiService } from 'src/app/services/poke-api/poke-api.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, MatInputModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  value = '';

  constructor(private pokeApiService: PokeApiService) {}

  async searchPokemon(): Promise<any> {
    if (!this.value) return;
    const pokemon = await this.pokeApiService.getPokemon(this.value);
    console.log(pokemon);
  }
}
