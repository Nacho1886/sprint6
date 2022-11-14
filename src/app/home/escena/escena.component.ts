import { Component } from '@angular/core';

import { SentencesService } from '../services/sentences.service';

import { Sentence } from "../interfaces/Sentence";

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.scss']
})
export class EscenaComponent {
  
  currentIndexSentence: number = 0

  currentSentence: string = this.sentences[this.currentIndexSentence].txt

  get sentences(): Sentence[] {return this.sentencesService.showSentences}

  next(): void {
    this.currentIndexSentence++
    this.sentences[this.currentIndexSentence]
  }
  prev(): void {this.currentIndexSentence--}
  
  activeSentence(current: number): void {
    this.currentIndexSentence = current;
    this.sentences[this.currentIndexSentence]
  }

  constructor(
    private sentencesService: SentencesService
  ) { }
}
