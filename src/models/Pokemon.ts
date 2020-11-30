export class Pokemon {

  id: number;
  idNational: string;
  idRegional: number;

  nameEnglish: string;
  nameFrench: string;
  nameJapanese: string;

  regularForm: string;
  shinyForm: string;
  regularAnimation: string;
  shinyAnimation: string;

  types: string[];
  region: string;
  evolutionTree: string[];
  forms: string[];

  counter: number;

  constructor() {}

}