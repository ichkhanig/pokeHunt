import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { PokemonService } from 'src/services/pokemon.service';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {

  private pkmnList;

  constructor(private pokemonService: PokemonService,
              private router: Router,
              private navController: NavController,
              private nativePageTransitions: NativePageTransitions) {}

  ngOnInit() {
    this.pkmnList = this.pokemonService.getAllPokemon();
  }

  findPokemon(search: any) {
    return this.pkmnList = this.pokemonService.findPokemon(String(search.target.value));
  }

  onGoToName(name: string) {
    this.router.navigate(['/new/' + name]);
  }

  onSwipeLeft($event) {
    let options: NativeTransitionOptions = {
      direction: 'right',
      duration: 200
    }
    this.nativePageTransitions.slide(options);
    this.navController.navigateBack(['/menu']);
  }

  getTypeColor(type: string) {
    return this.pokemonService.produceTypeColor(type);
  }

  getTypeIcon(type: string) {
    return this.pokemonService.produceTypeIcon(type);
  }

}
