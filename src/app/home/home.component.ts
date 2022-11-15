import { Component } from '@angular/core';
import { Sentence } from './interfaces/Sentence';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  printBackground(sentence: Sentence): void {
    console.log(sentence);
    
  }

}
