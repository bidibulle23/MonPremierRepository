import './rxjs-extensions';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { ContactDetailComponent } from './contact-detail.component';
import { ContactsComponent } from './contacts.component';
import { DashboardComponent } from './dashboard.component';
import { ContactSearchComponent } from './contact-search.component';

import { ContactService } from './contact.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [ 
	BrowserModule,
	FormsModule,
    AppRoutingModule,
	HttpModule
  ],
  declarations: [
    AppComponent,
	ContactDetailComponent,
	ContactsComponent,
	DashboardComponent,
	ContactSearchComponent
  ],
  providers: [
    ContactService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
