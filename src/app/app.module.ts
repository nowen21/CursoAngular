import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layouts/company/navbar/navbar.component';
import { RedesComponent } from './components/layouts/company/redes/redes.component';
import { CompanyComponent } from './components/layouts/company/company/company.component';
import { CarruselComponent } from './components/layouts/company/carrusel/carrusel.component';
import { AboutComponent } from './components/layouts/company/about/about.component';
import { ServicesComponent } from './components/layouts/company/services/services.component';
import { PortfolioComponent } from './components/layouts/company/portfolio/portfolio.component';
import { ClientsComponent } from './components/layouts/company/clients/clients.component';
import { FooterComponent } from './components/layouts/company/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RedesComponent,
    CompanyComponent,
    CarruselComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    ClientsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
