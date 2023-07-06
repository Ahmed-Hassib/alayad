import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundedComponent } from './not-founded/not-founded.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const appRouting: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '**', component: NotFoundedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRouting)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
