import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { Pokemon } from 'src/app/models/Pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  private readonly API_URL = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemon(nameOrId: string | number): Promise<Pokemon> {
    return new Promise((resolve, reject) => {
      this.http
        .get<Pokemon>(`${this.API_URL}/pokemon/${nameOrId}`)
        .pipe(take(1))
        .subscribe({
          next: (value) => resolve(value),
          error: (err) => reject(err),
        });
    });
  }
}
