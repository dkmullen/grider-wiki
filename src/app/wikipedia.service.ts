import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  url = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=red';

  constructor() { }

  public search(term: string) {
    return 'I am wiki search results';
  }
}
