import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { FormsModule } from '@angular/forms';
import { PoFieldModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';
import { ListPessoasComponent } from './list-pessoas/list-pessoas.component';
import { FormPessoasComponent } from './form-pessoas/form-pessoas.component';


@NgModule({
  declarations: [
    AppComponent,
    ListPessoasComponent,
    FormPessoasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    PoFieldModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
