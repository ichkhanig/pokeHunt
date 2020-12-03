import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/services/pokemon.service';

@Component({
  selector: 'app-dex',
  templateUrl: './dex.page.html',
  styleUrls: ['./dex.page.scss'],
})
export class DexPage implements OnInit {

  private pkmnList;
  private shownList;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pkmnList = this.pokemonService.getAllPokemon();
  }

  showPokemonByRegion(search: string) {
    this.pkmnList.filter((item) => {
      return item.region.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  }

}
