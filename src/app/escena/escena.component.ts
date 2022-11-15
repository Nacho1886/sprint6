import { Component, EventEmitter, Output } from '@angular/core';

import { SentencesService } from '../services/sentences.service';

import { Sentence } from "../interfaces/Sentence";

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.scss']
})
export class EscenaComponent {
  
  currentIndexSentence: number = 0

  get sentences(): Sentence[] {return this.sentencesService.showSentences}

  @Output() currentSentence: EventEmitter<Sentence> = new EventEmitter();


  next(): void {
    this.currentIndexSentence++;
    if (this.currentIndexSentence === 4) this.currentIndexSentence = 0
    this.activeSentence();
  }
  
  prev(): void {
    this.currentIndexSentence--;
    if (this.currentIndexSentence === -1) this.currentIndexSentence = 3
    this.activeSentence();
  }
  
  activeSentence(): void {
    this.currentSentence.emit(this.sentences[this.currentIndexSentence])
  }

  constructor(
    private sentencesService: SentencesService
  ) { }
}
