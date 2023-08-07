import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgeModule } from './age/age.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryModule } from './country/country.module';
import { DictModule } from './dict/dict.module';
import { RoverModule } from './rover/rover.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RoverModule,
    CountryModule,
    AgeModule,
    DictModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
