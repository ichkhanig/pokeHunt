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

  private pkmnList = [];
  private tmpList;
  count: number = 0;
  pace = 60;

  constructor(private pokemonService: PokemonService,
              private router: Router,
              private navController: NavController,
              private nativePageTransitions: NativePageTransitions) {}

  ngOnInit() {
    this.tmpList = this.pokemonService.getAllPokemon();
    this.refresh(this.count);
  }

  findPokemon(search: any) {
    this.pkmnList = [];
    this.count = 0;
    this.loadMorePokemon(event);
    return this.tmpList = this.pokemonService.findPokemon(String(search.target.value));
  }

  getTypeColor(type: string) {
    return this.pokemonService.produceTypeColor(type);
  }

  getTypeIcon(type: string) {
    return this.pokemonService.produceTypeIcon(type);
  }

  loadMorePokemon(event) {
    setTimeout(() => {
      this.refresh(this.count);
      event.target.complete();
    }, 150);
  }

  refresh(count: number) {
    if (count + this.pace < this.tmpList.length) {
      for (let i=count; i<count+this.pace; i++) {
        this.pkmnList.push(this.tmpList[i]);
      }
    } else {
      for (let i=count; i<this.tmpList.length; i++) {
        this.pkmnList.push(this.tmpList[i]);
      }
    }
    this.count += this.pace;
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
}
