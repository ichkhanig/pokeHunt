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
      case "Dark":
        return "#704241";
        break;
      case "Electric":
        return "#f0dc82";
        break;
      case "Fire":
        return "#ff6e4a";
        break;
      case "Grass":
        return "#8fd79f";
        break;
      case "Normal":
        return "#c0c0c0";
        break;
      case "Steel":
        return "#838996";
        break;
      default:
        return "white";
        break;
    }
  }

  //TODO produce the icons for all types
  produceTypeIcon(type: string) {
    switch (type) {
      case "Dark":
        return "./assets/type/DarkIC.png";
        break;
      case "Electric":
        return "./assets/type/ElectricIC.png";
        break;
      case "Fire":
        return "./assets/type/FireIC.png";
        break;
      case "Grass":
        return "./assets/type/GrassIC.png";
        break;
      case "Normal":
        return "./assets/type/NormalIC.png";
        break;
      case "Poison":
        return "./assets/type/PoisonIC.png";
        break;
      case "Steel":
        return "./assets/type/SteelIC.png";
        break;
      default:
        return "";
        break;
    }
  }

}
