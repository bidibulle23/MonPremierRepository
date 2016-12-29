import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Contact } from './contact';
import { ContactService } from './contact.service';

@Component({
  moduleId: module.id,
  selector: 'my-contacts',
  templateUrl: 'contacts.component.html',
  styleUrls: [ 'contacts.component.css' ]
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];
  selectedContact: Contact;

  constructor(
    private router: Router,
    private contactService: ContactService
  ) { }

  getContacts(): void {
    this.contactService.getContacts().then(contacts => this.contacts = contacts);
  }

  ngOnInit(): void {
    this.getContacts();
  }

  onSelect(contact: Contact): void {
    this.selectedContact = contact;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedContact.id]);
  }

  add(firstName: string, lastName: string): void {
    firstName = firstName.trim();
    if (!(firstName && lastName)) { return; }
	var contact = new Contact(firstName, lastName);
    this.contactService.create(contact)
      .then(contact => {
        this.contacts.push(contact);
        this.selectedContact = null;
      });
  }

  delete(contact: Contact): void {
    this.contactService
      .delete(contact.id)
      .then(() => {
        this.contacts = this.contacts.filter(c => c !== contact);
        if (this.selectedContact === contact) { this.selectedContact = null; }
      });
  }
}
