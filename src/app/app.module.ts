import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FeriadoComponent } from './feriado/feriado.component';
import { ShowFeriadoComponent } from './feriado/show-feriado/show-feriado.component';
import { AddEditFeriadoComponent } from './feriado/add-edit-feriado/add-edit-feriado.component';
import { FeriadoApiService } from './feriado-api.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FeriadoComponent,
    ShowFeriadoComponent,
    AddEditFeriadoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [FeriadoApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
