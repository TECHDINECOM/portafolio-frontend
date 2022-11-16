import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenunavComponent } from './components/menunav/menunav.component';
import { DatosBasicosComponent } from './components/datos-basicos/datos-basicos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenunavComponent,
    DatosBasicosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
