import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/services/pokemon.service';

@Component({
  selector: 'app-hunt-detail',
  templateUrl: './hunt-detail.page.html',
  styleUrls: ['./hunt-detail.page.scss'],
})
export class HuntDetailPage implements OnInit {

  private pokemon;

  constructor(private pokemonService: PokemonService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pokemon = this.pokemonService.getPokemonById(params.id)
    });
    console.log(this.pokemon);
  }



}
