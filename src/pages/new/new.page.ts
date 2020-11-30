import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/services/pokemon.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {

  private pkmnList;

  constructor(private pokemonService: PokemonService,
              private router: Router) {}

  ngOnInit() {
    this.pkmnList = this.pokemonService.getAllPokemon();
    console.log(this.pokemonService.getAllHunt());
  }

  findPokemon(search: any) {
    return this.pkmnList = this.pokemonService.findPokemon(String(search.target.value));
  }

  onGoToName(name: string) {
    this.router.navigate(['/new/' + name]);
  }

}
