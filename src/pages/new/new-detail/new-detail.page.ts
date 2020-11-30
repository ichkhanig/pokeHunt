import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from 'src/services/pokemon.service';

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
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pokemon = this.pokemonService.getPokemonByName(params.name)
    });
    this.evolutionList = this.pokemonService.findEvolutionOrForms(this.pokemon.evolutionTree);
    this.formList = this.pokemonService.findEvolutionOrForms(this.pokemon.forms);
    console.log(this.pokemon);
    console.log(this.evolutionList);
    console.log(this.formList);
  }

  getBackgroundColor(type: string) {
    return this.pokemonService.produceTypeColor(type);
  }

  onAddPokemonToHunt(name: string) {
    return this.pokemonService.addPokemonToHunt(name);
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
