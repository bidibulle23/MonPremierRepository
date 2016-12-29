import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Contact } from './contact';

@Injectable()
export class ContactService {
  private contactsUrl = 'http://localhost:8080/people';

  constructor(private http: Http) { }

  getContacts(): Promise<Contact[]> {
    return this.http.get(this.contactsUrl)
      .toPromise()
      .then(response => response.json() as Contact[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getContactsSlowly(): Promise<Contact[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 seconds delay
      setTimeout(() => resolve(this.getContacts()), 2000);
    });
  }

  getContact(id: string): Promise<Contact> {
    const url = `${this.contactsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Contact)
      .catch(this.handleError);
  }

  private headers = new Headers({'Content-Type': 'application/json'});

  create(contact: Contact): Promise<Contact> {
    return this.http
      .post(this.contactsUrl, JSON.stringify(contact), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  update(contact: Contact): Promise<Contact> {
    const url = `${this.contactsUrl}/${contact.id}`;
    return this.http
      .put(url, JSON.stringify(contact), {headers: this.headers})
      .toPromise()
      .then(() => contact)
      .catch(this.handleError);
  }

  delete(id: string): Promise<void> {
    const url = `${this.contactsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}