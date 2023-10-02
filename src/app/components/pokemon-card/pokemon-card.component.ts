import { CommonModule } from '@angular/common';
import { AfterViewChecked, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Pokemon } from 'src/app/models/Pokemon';
import { PokeApiService } from 'src/app/services/poke-api/poke-api.service';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements AfterViewChecked {
  @Input() pokemon: Pokemon | null = null;

  constructor(private pokeApiService: PokeApiService) {}

  ngAfterViewChecked(): void {
    this.getPokemonDescription();
  }

  getPokemonTypes(): string[] {
    return this.pokemon?.types.map(t => t.type.name) as string[];
  }

  async getPokemonDescription(): Promise<string | any> {
    if (!this.pokemon) throw new Error('Pokemon attribute is null.');
    const details = await this.pokeApiService.getPokemonDetails(this.pokemon.id);
    console.log(details);
    // const description = details.flavor_text_entries.find(fte => fte.language.name == 'en' && fte.flavor_text);
    // console.log(description);
    // return description?.flavor_text as string;
  }
}
