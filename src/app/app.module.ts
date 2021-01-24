import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpesaComponent } from './spesa/spesa.component';
import { NavComponent } from './nav/nav.component';
import { FormSpesaComponent } from './form-spesa/form-spesa.component';
import { FormsModule } from '@angular/forms';
import { SpesaElencoComponent } from './spesa-elenco/spesa-elenco.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    SpesaComponent,
    NavComponent,
    FormSpesaComponent,
    SpesaElencoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
