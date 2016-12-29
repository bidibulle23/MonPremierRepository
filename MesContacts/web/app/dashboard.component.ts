import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import { ContactService } from './contact.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  contacts: Contact[];

  constructor(private contactService: ContactService) { }

  getContacts(): void {
    this.contactService.getContacts().then(contacts => this.contacts = contacts.slice(0, 4));
  }

  ngOnInit(): void {
    this.getContacts();
  }
}