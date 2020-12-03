import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PokemonService } from 'src/services/pokemon.service';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-dex',
  templateUrl: './dex.page.html',
  styleUrls: ['./dex.page.scss'],
})
export class DexPage implements OnInit {

  private pkmnList;
  private shownList;

  constructor(private pokemonService: PokemonService,
              private navController: NavController,
              private nativePageTransitions: NativePageTransitions) {}

  ngOnInit() {
    this.pkmnList = this.pokemonService.getAllPokemon();
  }

  showPokemonByRegion(search: string) {
    this.pkmnList.filter((item) => {
      return item.region.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  }

  onSwipeLeft($event) {
    let options: NativeTransitionOptions = {
      direction: 'right',
      duration: 200
    }
    this.nativePageTransitions.slide(options);
    this.navController.navigateBack(['/menu']);
  }

}
