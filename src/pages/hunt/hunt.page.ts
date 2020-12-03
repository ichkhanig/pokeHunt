import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'
import { Router } from '@angular/router';
import { PokemonService } from 'src/services/pokemon.service';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-hunt',
  templateUrl: './hunt.page.html',
  styleUrls: ['./hunt.page.scss'],
})
export class HuntPage implements OnInit {

  private pkmnList;

  constructor(private pokemonService: PokemonService,
              private router: Router,
              private navController: NavController,
              private nativePageTransitions: NativePageTransitions) { }

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

  onSwipeLeft($event) {
    let options: NativeTransitionOptions = {
      direction: 'right',
      duration: 200
    }
    this.nativePageTransitions.slide(options);
    this.navController.navigateBack(['/menu']);
  }
}
