import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EscenaComponent } from './home/escena/escena.component';
import { SentencesService } from './home/services/sentences.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EscenaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    SentencesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
