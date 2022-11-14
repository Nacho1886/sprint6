import { Injectable } from '@angular/core';

import dataSentence from '../../assets/data/frases.json';

import { Sentence } from '../home/interfaces/Sentence';



@Injectable({
  providedIn: 'root'
})
export class SentencesService {
  
  private _sentences: Sentence[] = dataSentence;

  get showSentences(): Sentence[] {return [...this._sentences]}

}
