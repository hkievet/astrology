import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BirthdayService } from './birthday.service';
import { WebsocketService } from './websocket.service';
import { AstroStyleguideComponent } from './astro-styleguide/astro-styleguide.component';
import { PlanetSummaryComponent } from './planet-summary/planet-summary.component';


@NgModule({
  declarations: [
    AppComponent,
    AstroStyleguideComponent,
    PlanetSummaryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ BirthdayService, WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
