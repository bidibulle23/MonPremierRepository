import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { ContactSearchService } from './contact-search.service';
import { Contact } from './contact';

@Component({
  moduleId: module.id,
  selector: 'contact-search',
  templateUrl: 'contact-search.component.html',
  styleUrls: [ 'contact-search.component.css' ],
  providers: [ContactSearchService]
})

export class ContactSearchComponent implements OnInit {
  contacts: Observable<Contact[]>;
  private searchTerms = new Subject<string>();
  constructor(
    private contactSearchService: ContactSearchService,
    private router: Router
  ) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.contacts = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.contactSearchService.search(term)
        // or the observable of empty contacts if no search term
        : Observable.of<Contact[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Contact[]>([]);
      });
  }
  gotoDetail(contact: Contact): void {
    let link = ['/detail', contact.id];
    this.router.navigate(link);
  }
}
