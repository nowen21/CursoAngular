import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layouts/company/navbar/navbar.component';
import { RedesComponent } from './components/layouts/company/redes/redes.component';

import { CarruselComponent } from './components/layouts/company/carrusel/carrusel.component';
import { AboutComponent } from './components/layouts/company/about/about.component';
import { ServicesComponent } from './components/layouts/company/services/services.component';
import { PortfolioComponent } from './components/layouts/company/portfolio/portfolio.component';
import { ClientsComponent } from './components/layouts/company/clients/clients.component';
import { FooterComponent } from './components/layouts/company/footer/footer.component';

import { FormsModule } from '@angular/forms';

import { Routes,RouterModule } from '@angular/router';
import { HeaderComponent } from './components/layouts/company/header/header.component';
import { HomeComponent } from './components/layouts/company/home/home.component';
import { InlineComponent } from './components/inline/inline.component';

import { BreadcrumbsComponent } from './components/layouts/breadcrumbs/breadcrumbs.component';

import { LayoutComponent } from './components/layouts/company/layout/layout.component';
import { DoCheckeParentComponent } from './components/lifecycle/do-check-parent/do-check-parent.component';
import { OnInitComponent } from './components/lifecycle/on-init/on-init.component';
import { PadreComponent } from './components/lifecycle/ngonchanges/padre/padre.component';
import { HijoComponent } from './components/lifecycle/ngonchanges/hijo/hijo.component';
import { DoCheckChildComponent } from './components/lifecycle/do-check-child/do-check-child.component';
import { AfterContentInitParentComponent } from './components/lifecycle/aftercontentinit/after-content-init-parent/after-content-init-parent.component';
import { AfterContentInitChildComponent } from './components/lifecycle/aftercontentinit/after-content-init-child/after-content-init-child.component';
import { AfterContentInitGrandchildComponent } from './components/lifecycle/aftercontentinit/after-content-init-grandchild/after-content-init-grandchild.component';




const app_routes: Routes = [
  { path: 'homexxxx', component: HomeComponent },
  { path: 'inlinexx', component: InlineComponent},
  { path: 'onchange', component: PadreComponent },
  { path: 'docheckx', component: DoCheckeParentComponent },
  { path: 'oninitxx', component: OnInitComponent },
  { path: 'aftecont', component: AfterContentInitParentComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'homexxxx' },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RedesComponent,
    CarruselComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    ClientsComponent,
    FooterComponent,
    PadreComponent,
    HijoComponent,
    HeaderComponent,
    HomeComponent,
    InlineComponent,
    OnInitComponent,
    BreadcrumbsComponent,
    DoCheckChildComponent,
    DoCheckeParentComponent,
    LayoutComponent,
    AfterContentInitParentComponent,
    AfterContentInitChildComponent,
    AfterContentInitGrandchildComponent,
 
  

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(app_routes,{
      /**
       * Indicarle a los navegadores que después del # no es un directorio ni sitio web sino que hace parte de la ruta del index.html que
       * se encuentra en esa dirección, con el fin de poder desplegar en servidores donde no se tiene acceso al .htaccess
       */
      useHash:true // se le indica a la aplicación 
    }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
    // exportar la funcionalidad seleccionada para que la utilicen otros NgModules.
    exports: [
      RouterModule
    ],
})
export class AppModule { }
