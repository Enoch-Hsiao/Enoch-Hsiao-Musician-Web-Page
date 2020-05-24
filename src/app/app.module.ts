import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { AppRoutingModule }     from './app-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BioComponent } from './components/bio/bio.component';
import { VideosComponent } from './components/videos/videos.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    BioComponent,
    VideosComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgMaterialModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
