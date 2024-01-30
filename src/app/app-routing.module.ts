import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundedComponent } from './not-founded/not-founded.component';
import { CustomersComponent } from './customers/customers.component';
import { ServicesComponent } from './services/services.component';

const appRouting: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRouting)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
