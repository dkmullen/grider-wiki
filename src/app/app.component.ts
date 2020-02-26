import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private wikipedia: WikipediaService) {}
   onTerm(term: string) {
    console.log(this.wikipedia.search(term));
  }
 }
