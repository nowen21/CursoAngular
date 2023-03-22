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
import { LoggerService } from './components/lifecycle/services/logger.service';
import { AfterViewGrandChildComponent } from './components/lifecycle/after-view/after-view-grand-child/after-view-grand-child.component';
import { AfterViewChildComponent } from './components/lifecycle/after-view/after-view-child/after-view-child.component';
import { AfterViewParentComponent } from './components/lifecycle/after-view/after-view-parent/after-view-parent.component';
import { NoEncapsulationComponent } from './components/encapsulado/no-encapsulation/no-encapsulation.component';
import { EmulatedEncapsulationComponent } from './components/encapsulado/emulated-encapsulation/emulated-encapsulation.component';
import { ShadowDomEncapsulationComponent } from './components/encapsulado/shadow-dom-encapsulation/shadow-dom-encapsulation.component';
import { EncapsulationComponent } from './components/encapsulado/encapsulation/encapsulation.component';
import { InteraccionComponent } from './components/interaccion/interaccion/interaccion.component';
import { PadreHijoParentComponent } from './components/interaccion/padre-hijo/padre-hijo-parent/padre-hijo-parent.component';
import { PadreHijoChildComponent } from './components/interaccion/padre-hijo/padre-hijo-child/padre-hijo-child.component';
import { NameChildComponent } from './components/interaccion/setter/name-child/name-child.component';
import { NameParentComponent } from './components/interaccion/setter/name-parent/name-parent.component';
import { VersionChildComponent } from './components/interaccion/version/version-child/version-child.component';
import { VersionParentComponent } from './components/interaccion/version/version-parent/version-parent.component';
import { VoterComponent } from './components/interaccion/voter/voter/voter.component';
import { VotetakerComponent } from './components/interaccion/voter/votetaker/votetaker.component';
import { CountdownTimerVlComponent } from './components/interaccion/via-variable-local/countdown-timer-vl/countdown-timer-vl.component';
import { CountdownParentVlComponent } from './components/interaccion/via-variable-local/countdown-parent-vl/countdown-parent-vl.component';
import { CountdownTimerVhComponent } from './components/interaccion/via-vista-hija/countdown-timer-vh/countdown-timer-vh.component';
import { CountdownParentVhComponent } from './components/interaccion/via-vista-hija/countdown-parent-vh/countdown-parent-vh.component';
import { AstronautComponent } from './components/interaccion/via-servicio/astronaut/astronaut.component';
import { MisioncontrolComponent } from './components/interaccion/via-servicio/misioncontrol/misioncontrol.component';
import { MissionService } from './components/interaccion/services/mission.service';
import { StyleComponent } from './components/styles/style/style.component';
import { HeroMainComponent } from './components/styles/hero-main/hero-main.component';
import { NavbarInteraComponent } from './components/interaccion/navbar-intera/navbar-intera.component';
import { QuestSummaryComponent } from './components/styles/quest-summary/quest-summary.component';
import { HeroDetailsComponent } from './components/styles/hero-details/hero-details.component';
import { HeroControlsComponent } from './components/styles/hero-controls/hero-controls.component';
import { HeroTeamComponent } from './components/styles/hero-team/hero-team.component';
import { CompartirComponent } from './components/compartir/compartir/compartir.component';
import { PadrePhComponent } from './components/compartir/padre-hijo/padre-ph/padre-ph.component';
import { HijoPhComponent } from './components/compartir/padre-hijo/hijo-ph/hijo-ph.component';
import { HijoHpComponent } from './components/compartir/hijo-padre/hijo-hp/hijo-hp.component';
import { PadreHpComponent } from './components/compartir/hijo-padre/padre-hp/padre-hp.component';
import { HijoIoComponent } from './components/compartir/input-output/hijo-io/hijo-io.component';
import { PadreIoComponent } from './components/compartir/input-output/padre-io/padre-io.component';
import { PadreMetaComponent } from './components/compartir/metadata/padre-meta/padre-meta.component';
import { HijoMetaComponent } from './components/compartir/metadata/hijo-meta/hijo-meta.component';
import { HijoAliaComponent } from './components/compartir/aliasing/hijo-alia/hijo-alia.component';
import { PadreAliaComponent } from './components/compartir/aliasing/padre-alia/padre-alia.component';


const app_routes: Routes = [
  { path: 'homexxxx', component: HomeComponent },
  { path: 'inlinexx', component: InlineComponent},
  { path: 'onchange', component: PadreComponent },
  { path: 'docheckx', component: DoCheckeParentComponent },
  { path: 'oninitxx', component: OnInitComponent },
  { path: 'aftecont', component: AfterContentInitParentComponent },
  { path: 'afteview', component: AfterViewParentComponent },
  { path: 'encapsul', component: EncapsulationComponent }, 
  { path: 'interacc', component: InteraccionComponent }, 
  { path: 'stylexxx', component: StyleComponent }, 
  { path: 'comparti', component: CompartirComponent },
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
    AfterViewGrandChildComponent,
    AfterViewChildComponent,
    AfterViewParentComponent,
    NoEncapsulationComponent,
    EmulatedEncapsulationComponent,
    ShadowDomEncapsulationComponent,
    EncapsulationComponent,
    InteraccionComponent,
    PadreHijoParentComponent,
    PadreHijoChildComponent,
    NameChildComponent,
    NameParentComponent,
    VersionChildComponent,
    VersionParentComponent,
    VoterComponent,
    VotetakerComponent,
    CountdownTimerVlComponent,
    CountdownParentVlComponent,
    CountdownTimerVhComponent,
    CountdownParentVhComponent,
    AstronautComponent,
    MisioncontrolComponent,
    StyleComponent,
    HeroMainComponent,
    NavbarInteraComponent,
    QuestSummaryComponent,
    HeroDetailsComponent,
    HeroControlsComponent,
    HeroTeamComponent,
    CompartirComponent,
    PadrePhComponent,
    HijoPhComponent,
    HijoHpComponent,
    PadreHpComponent,
    HijoIoComponent,
    PadreIoComponent,
    PadreMetaComponent,
    HijoMetaComponent,
    HijoAliaComponent,
    PadreAliaComponent,
 
   
 
 
  

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
  providers: [
    LoggerService,
    MissionService
  ],
  bootstrap: [AppComponent],
    // exportar la funcionalidad seleccionada para que la utilicen otros NgModules.
    exports: [
      RouterModule
    ],
})
export class AppModule { }
