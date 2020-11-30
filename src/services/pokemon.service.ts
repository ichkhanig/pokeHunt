import { Injectable } from '@angular/core';
import { Pokemon } from '../models/Pokemon';
import PokemonJson from '../assets/json/PokemonJson.json';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private huntList: Pokemon[] = [];
  private pkmnList: Pokemon[] = PokemonJson;
  private shinyList: Pokemon[] = [];
  count = 0;


  constructor() { }

  addPokemonToHunt(name: string) {
    let obj = this.getPokemonByName(name);
    let tmp: Pokemon = {
      id: this.count,
      idNational: obj.idNational,
      idRegional: obj.idRegional,
      nameEnglish: obj.nameEnglish,
      nameFrench: obj.nameFrench,
      nameJapanese: obj.nameJapanese,
      regularForm: obj.regularForm,
      shinyForm: obj.shinyForm,
      regularAnimation: obj.regularAnimation,
      shinyAnimation: obj.shinyAnimation,
      types: obj.types,
      region: obj.region,
      evolutionTree: obj.evolutionTree,
      forms: obj.forms,
      counter: 0
    };
    this.huntList.push(tmp);
    this.count++;
    console.log(this.huntList);
  }

  findEvolutionOrForms(search: string[]) {
    let tmpList: Pokemon[] = [];
    for (var val of search) {
      tmpList.push(this.pkmnList.find(({nameEnglish}) => nameEnglish == val));
    }
    return tmpList;
  }

  findPokemon(search: string) {
    return this.pkmnList.filter((item) => {
      return item.nameEnglish.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
        item.nameFrench.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
        item.types.map(v => v.toLowerCase()).indexOf(search.toLowerCase()) > -1;
    });
  }

  getAllHunt() {
    return this.huntList;
  }

  getAllPokemon() {
    return this.pkmnList;
  }

  getAllShiny() {
    return this.shinyList;
  }

  getPokemonById(idPkmn: number) {
    return this.huntList.find(({id}) => id == idPkmn);
  }

  getPokemonByName(namePokemon: string) {
    return this.pkmnList.find(({nameEnglish}) => nameEnglish == namePokemon);
  }

  //TODO produce the colors for all types
  produceTypeColor(type: string) {
    switch (type) {
      case "Grass":
        console.log("he's green");
        break;
      case "Steel":
        console.log("he's grey");
        break;
      default:
        console.log("got a problem here");
        break;
    }
  }

}
