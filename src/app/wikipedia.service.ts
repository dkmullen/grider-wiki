import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';

// Observable is a generic class, so we can specify a type with <number>
// const observable = new Observable<number>((observer) => {
//   observer.next(1);
// });

// observable.subscribe(value => {
//   console.log(value);
// });

interface WikipediaResponse {
  query: {
    search: {
      title: string;
      snippet: string;
      padgid: number;
    }[]
  };
}

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  url = 'https://en.wikipedia.org/w/api.php';

  constructor(private http: HttpClient) { }

  public search(term: string) {
    return this.http
    .get<WikipediaResponse>(this.url, {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*'
      }
    }).pipe(
      pluck('query', 'search')
    );
  }
}
