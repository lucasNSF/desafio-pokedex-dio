import { CommonModule } from '@angular/common';
import {
  AfterViewChecked,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Pokemon } from 'src/app/models/Pokemon';
import { PokemonDetails } from 'src/app/models/PokemonDetails';
import { PokeApiService } from 'src/app/services/poke-api/poke-api.service';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnChanges {
  @Input() pokemon: Pokemon | null = null;
  pokemonDetails: PokemonDetails | null = null;

  constructor(private pokeApiService: PokeApiService) {}

  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    const { pokemon } = changes;
    if (pokemon.currentValue) {
      this.pokemonDetails = await this.pokeApiService.getPokemonDetails(
        this.pokemon?.name as string
      );
    }
  }

  getPokemonTypes(): string[] {
    return this.pokemon?.types.map((t) => t.type.name) as string[];
  }

  getPokemonRarity(): string {
    if (this.pokemonDetails?.is_legendary) return 'legendary';
    if (this.pokemonDetails?.is_mythical) return 'mythical';
    return 'common';
  }

  getPokemonDescription(): string {
    const description = this.pokemonDetails?.flavor_text_entries.find(
      (fte) => fte.language.name == 'en'
    );
    return description?.flavor_text?.toLowerCase() as string;
  }
}
