import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CinemaService } from "./services/cinema.service";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';


import { RouterModule, Routes } from "@angular/router";
import { MovieComponent } from './components/movie/movie.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'movie/:id', component: MovieComponent }
];

@NgModule({
  declarations: [
    AppComponent,
     HomeComponent,
     MovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CinemaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
