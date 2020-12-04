import { Injectable } from '@angular/core';
import { Pokemon } from '../models/Pokemon';
import PokemonGen1Json from '../assets/json/PokemonGen1Json.json';
import PokemonGen2Json from '../assets/json/PokemonGen2Json.json';
import PokemonGen3Json from '../assets/json/PokemonGen3Json.json';
import PokemonGen4Json from '../assets/json/PokemonGen4Json.json';
import PokemonGen5Json from '../assets/json/PokemonGen5Json.json';
import PokemonGen6Json from '../assets/json/PokemonGen6Json.json';
import PokemonGen8Json from '../assets/json/PokemonGen8Json.json';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private huntList: Pokemon[] = [];
  private pkmnList: Pokemon[] = PokemonGen1Json;
  private shinyList: Pokemon[] = [];
  count = 0;


  constructor() {
    this.pkmnList = this.pkmnList.concat(PokemonGen2Json)
      .concat(PokemonGen3Json)
      .concat(PokemonGen4Json)
      .concat(PokemonGen5Json)
      .concat(PokemonGen6Json)
      .concat(PokemonGen8Json);
  }

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
      regularAnimationBack: obj.regularAnimationBack,
      shinyAnimationBack: obj.shinyAnimationBack,
      types: obj.types,
      region: obj.region,
      evolutionTree: obj.evolutionTree,
      forms: obj.forms,
      shinyLocked: obj.shinyLocked,
      counter: 0,
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
        item.types.map(v => v.toLowerCase()).indexOf(search.toLowerCase()) > -1 ||
        item.region.toLowerCase().indexOf(search.toLowerCase()) > -1;
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

  getPokemonByIdNational(idPkmn: number) {
    return this.pkmnList.find(({idNational}) => idNational == idPkmn);
  }

  getPokemonByName(namePokemon: string) {
    return this.pkmnList.find(({nameEnglish}) => nameEnglish == namePokemon);
  }

  produceTypeColor(type: string) {
    switch (type) {
      case "Bug":
        return "#bdda57";
        break;
      case "Dark":
        return "#704241";
        break;
      case "Dragon":
        return "#4166f5";
        break;
      case "Electric":
        return "#fada5e";
        break;
      case "Fairy":
        return "#ffb3de";
        break;
      case "Fighting":
        return "#cb4154";
        break;
      case "Fire":
        return "#ff6e4a";
        break;
      case "Flying":
        return "#8FA9DE";
        break;
      case "Ghost":
        return "#9678b6";
        break;
      case "Grass":
        return "#8fd79f";
        break;
      case "Ground":
        return "#da8a67";
        break;
      case "Ice":
        return "#a4f4f9";
        break;
      case "Normal":
        return "#c0c0c0";
        break;
      case "Poison":
        return "#dda0dd";
        break;
      case "Psychic":
        return "#ff91a4";
        break;
      case "Rock":
        return "#d2b48c";
        break;
      case "Steel":
        return "#838996";
        break;
      case "Water":
        return "#00bfff";
        break;
      default:
        return "white";
        break;
    }
  }

  produceTypeIcon(type: string) {
    switch (type) {
      case "Bug":
        return "./assets/type/BugIC.png";
        break;
      case "Dark":
        return "./assets/type/DarkIC.png";
        break;
      case "Dragon":
        return "./assets/type/DragonIC.png";
        break;
      case "Electric":
        return "./assets/type/ElectricIC.png";
        break;
      case "Fairy":
        return "./assets/type/FairyIC.png";
        break;
      case "Fighting":
        return "./assets/type/FightingIC.png";
        break;
      case "Fire":
        return "./assets/type/FireIC.png";
        break;
      case "Flying":
        return "./assets/type/FlyingIC.png";
        break;
      case "Ghost":
        return "./assets/type/GhostIC.png";
        break;
      case "Grass":
        return "./assets/type/GrassIC.png";
        break;
      case "Ground":
        return "./assets/type/GroundIC.png";
        break;
      case "Ice":
        return "./assets/type/IceIC.png";
        break;
      case "Normal":
        return "./assets/type/NormalIC.png";
        break;
      case "Poison":
        return "./assets/type/PoisonIC.png";
        break;
      case "Psychic":
        return "./assets/type/PsychicIC.png";
        break;
      case "Rock":
        return "./assets/type/RockIC.png";
        break;
      case "Steel":
        return "./assets/type/SteelIC.png";
        break;
      case "Water":
        return "./assets/type/WaterIC.png";
        break;
      default:
        return "???";
        break;
    }
  }

}
