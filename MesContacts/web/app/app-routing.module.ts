import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard.component';
import { ContactsComponent }      from './contacts.component';
import { ContactDetailComponent }  from './contact-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'contacts', component: ContactsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: ContactDetailComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}