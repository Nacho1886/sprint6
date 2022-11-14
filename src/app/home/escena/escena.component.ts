import { Component } from '@angular/core';

import { SentencesService } from '../services/sentences.service';

import { Sentence } from "../interfaces/Sentence";

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.scss']
})
export class EscenaComponent {
  
  // this.sentences =
  get sentences(): Sentence[] {return this.sentencesService.showSentences}


  constructor(
    private sentencesService: SentencesService
  ) { }
}
