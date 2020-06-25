import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { PlansComponent } from './components/plans/plans.component';
import { FaqComponent } from './components/faq/faq.component';

const routes: Routes = [
  { path: 'item', component: HomeComponent },
  { path: 'item', component: AboutComponent },
  { path: 'item', component: PortfolioComponent },
  { path: 'item', component: ContactComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PortfolioComponent,
    AboutComponent,
    FooterComponent,
    ContactComponent,
    PlansComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes,{
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
      scrollOffset: [0, 160]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
