import { Component } from '@angular/core';
import { Sentence } from '../interfaces/Sentence';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  currentSentence:Sentence = { txt: '', img: '../img/1.jpg'};
  
  
  onChangeSentence(sentence: Sentence): void {
    this.currentSentence = sentence;
  }
}
