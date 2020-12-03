export class Pokemon {

  id: number;
  idNational: number;
  idRegional: number;

  nameEnglish: string;
  nameFrench: string;
  nameJapanese: string;

  regularForm: string;
  shinyForm: string;
  regularAnimation: string;
  shinyAnimation: string;
  regularAnimationBack: string;
  shinyAnimationBack: string;

  types: string[];
  region: string;
  evolutionTree: string[];
  forms: string[];

  shinyLocked: boolean;
  counter: number;

  constructor() {}

}