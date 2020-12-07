import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
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
              private router: Router,
              private alertController: AlertController,
              private navController: NavController,
              private nativePageTransitions: NativePageTransitions) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pokemon = this.pokemonService.getHuntById(params.id)
    });
    console.log(this.pokemon);
  }

  getTypeColor(type: string) {
    return this.pokemonService.produceTypeColor(type);
  }

  onAddCounter(id: number) {
    this.pokemonService.increaseCounter(id);
  }

  async onSetCounter(id: number) {
    const alert = await this.alertController.create({
      header: 'Set counter: ',
      inputs: [
        {
          name: 'counter',
          type: 'number'
        }
      ],
      buttons: [
        {
          text: 'Set',
          handler: (alertData) => {
            this.pokemon.counter = alertData.counter;
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
        }
      ]
    });
    await alert.present();
  }

  async onResetCounter(id: number) {
    const alert = await this.alertController.create({
      message: 'Reset current hunt?',
      buttons: [
        {
          text: 'Reset',
          role: 'reset',
          handler: () => {
            this.pokemon.counter = 0;
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
        }
      ]
    });
    await alert.present();
  }

  async onGotShiny(id: number) {
    const alert = await this.alertController.create({
      message: 'You got a shiny !!\nAre you sure you did?',
      buttons: [
        {
          text: 'Hell YES',
          role: 'confirm',
          handler: () => {
            this.pokemonService.addPokemonToShiny(id);
            this.router.navigate(['tabs/tab/shiny']);
          }
        },
        {
          text: 'Misclicked',
          role: 'cancel',
        }
      ]
    });
    await alert.present();
  }

  async onDeleteHunt(id: number) {
    const alert = await this.alertController.create({
      message: 'Delete current hunt?',
      buttons: [
        {
          text: 'Delete',
          role: 'delete',
          handler: () => {
            this.pokemonService.deletePokemonFromHuntList(id);
            this.router.navigate(['/tabs/tab/hunt']);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
        }
      ]
    });
    await alert.present();
  }

  onSwipeUp($event) {
    let options: NativeTransitionOptions = {
      direction: 'down',
      duration: 200
    }
    this.nativePageTransitions.slide(options);
    this.navController.navigateBack(['/tabs/tab/hunt']);
  }

}
