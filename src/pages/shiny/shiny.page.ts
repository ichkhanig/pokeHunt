import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PokemonService } from 'src/services/pokemon.service';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-shiny',
  templateUrl: './shiny.page.html',
  styleUrls: ['./shiny.page.scss'],
})
export class ShinyPage implements OnInit {

  private pkmnList;

  constructor(private pokemonService: PokemonService,
              private navController: NavController,
              private nativePageTransitions: NativePageTransitions) { }

  ngOnInit() {
    this.pkmnList = this.pokemonService.getAllShiny();
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
