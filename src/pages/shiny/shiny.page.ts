import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/services/pokemon.service';

@Component({
  selector: 'app-shiny',
  templateUrl: './shiny.page.html',
  styleUrls: ['./shiny.page.scss'],
})
export class ShinyPage implements OnInit {

  private pkmnList;

  constructor(private pokemonService: PokemonService,
              private router: Router) { }

  ngOnInit() {
    this.pkmnList = this.pokemonService.getAllShiny();
  }

  getTypeColor(type: string) {
    return this.pokemonService.produceTypeColor(type);
  }

  onSwipeLeft($event) {
    this.router.navigate(['/tabs/tab/hunt']);
  }
}
