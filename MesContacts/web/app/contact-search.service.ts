import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Contact } from './contact';

@Injectable()
export class ContactSearchService {
  constructor(private http: Http) {}
  search(term: string): Observable<Contact[]> {
    return this.http
      .get(`http://localhost:8080/people/search/${term}`)
      .map((r: Response) => r.json() as Contact[]);
  }
}
