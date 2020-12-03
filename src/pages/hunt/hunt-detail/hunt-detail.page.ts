import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/services/pokemon.service';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-hunt-detail',
  templateUrl: './hunt-detail.page.html',
  styleUrls: ['./hunt-detail.page.scss'],
})
export class HuntDetailPage implements OnInit {

  private pokemon;

  constructor(private pokemonService: PokemonService,
              private route: ActivatedRoute,
              private navController: NavController,
              private nativePageTransitions: NativePageTransitions) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pokemon = this.pokemonService.getPokemonById(params.id)
    });
    console.log(this.pokemon);
  }

  onSwipeLeft($event) {
    let options: NativeTransitionOptions = {
      direction: 'down',
      duration: 200
    }
    this.nativePageTransitions.slide(options);
    this.navController.navigateBack(['/tabs/tab/hunt']);
  }

}
