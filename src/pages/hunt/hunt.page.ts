import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/services/pokemon.service';

@Component({
  selector: 'app-hunt',
  templateUrl: './hunt.page.html',
  styleUrls: ['./hunt.page.scss'],
})
export class HuntPage implements OnInit {

  private pkmnList;

  constructor(private pokemonService: PokemonService,
              private router: Router) { }

  ngOnInit() {
    this.pkmnList = this.pokemonService.getAllHunt();
    console.log(this.pkmnList);
  }

  getTypeColor(type: string) {
    return this.pokemonService.produceTypeColor(type);
  }

  onGoToDetail(id: number) {
    this.router.navigate(['/hunt/' + id]);
  }

}
