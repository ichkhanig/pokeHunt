import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from 'src/services/pokemon.service';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-new-detail',
  templateUrl: './new-detail.page.html',
  styleUrls: ['./new-detail.page.scss'],
})
export class NewDetailPage implements OnInit {

  private evolutionList;
  private formList;
  private pokemon;

  constructor(private pokemonService: PokemonService,
              private alertController: AlertController,
              private route: ActivatedRoute,
              private router: Router,
              private navController: NavController,
              private nativePageTransitions: NativePageTransitions) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pokemon = this.pokemonService.getPokemonByName(params.name)
    });
    this.evolutionList = this.pokemonService.findEvolutionOrForms(this.pokemon.evolutionTree);
    this.formList = this.pokemonService.findEvolutionOrForms(this.pokemon.forms);
    console.log(this.pokemonService.getPokemonByIdNational(this.pokemon.idNational));
  }

  getPokemonBefore(idPkmn: number) {
    return this.pokemonService.getPokemonByIdNational(idPkmn -1);
  }

  getPokemonAfter(idPkmn: number) {
    return this.pokemonService.getPokemonByIdNational(idPkmn +1);
  }

  getTypeColor(type: string) {
    return this.pokemonService.produceTypeColor(type);
  }

  getTypeIcon(type: string) {
    return this.pokemonService.produceTypeIcon(type);
  }

  onAddPokemonToHunt(name: string) {
    return this.pokemonService.addPokemonToHunt(name);
  }

  onSwipeLeft($event) {
    const previousPokemon = this.getPokemonBefore(this.pokemon.idNational);
    let options: NativeTransitionOptions = {
      direction: 'right',
      duration: 200
    }
    if (previousPokemon) {
      this.nativePageTransitions.slide(options);
      this.navController.navigateBack(['/', 'new', previousPokemon.nameEnglish]);
    }
  }

  onSwipeRight($event) {
    const nextPokemon = this.getPokemonAfter(this.pokemon.idNational);
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 200
    }
    if (nextPokemon) {
      this.nativePageTransitions.slide(options);
      this.navController.navigateBack(['/', 'new', nextPokemon.nameEnglish]);
    }
  }

  onSwipeUp($event) {
    let options: NativeTransitionOptions = {
      direction: 'down',
      duration: 200
    }
    this.nativePageTransitions.slide(options);
    this.navController.navigateBack(['/new']);
  }

  async testForShinyRateDefiner() {
    const alert = await this.alertController.create({
      header: 'Options',
      inputs: [
        {
          name: 'Pokemon',
          type: 'text'
        }
      ],
      buttons: [
        {
          text: 'Hunt',
          handler: (alertData) => {
            this.pokemonService.addPokemonToHunt(alertData.Pokemon);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    await alert.present();
  }

}
