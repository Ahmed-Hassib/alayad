import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { NotFoundedComponent } from './not-founded/not-founded.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BannerComponent } from './banner/banner.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { PartnersComponent } from './partners/partners.component';
import { ProblemsComponent } from './problems/problems.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { CustomersComponent } from './customers/customers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BannerCarouselComponent } from './banner/banner-carousel/banner-carousel.component';
import { BannerContentComponent } from './banner/banner-content/banner-content.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundedComponent,
    HomeComponent,
    ContactUsComponent,
    BannerComponent,
    StatisticsComponent,
    PartnersComponent,
    ProblemsComponent,
    SolutionsComponent,
    WhyUsComponent,
    CustomersComponent,
    BannerCarouselComponent,
    BannerContentComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
