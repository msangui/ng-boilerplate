import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, catchError } from 'rxjs/operators';

const routes = {
  quote: (c: RandomQuoteContext) => `/jokes/random?category=${c.category}`
};

export interface RandomQuoteContext {
  // The quote's category: 'nerdy', 'explicit'...
  category: string;
}

@Injectable()
export class QuoteService {

  constructor(private http: Http) { }

  getRandomQuote(context: RandomQuoteContext): Observable<{value: string, icon?: string}> {
    return this.http.get(routes.quote(context), { cache: true })
      .pipe(
        map((res: Response) => res.json()),
        map(body => ({value: body.value, icon: body.icon_url})),
        catchError(() => of({value: 'Error, could not load joke :-('}))
      );
  }

}
