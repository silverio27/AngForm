import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { FormsModule } from '@angular/forms';
import { PoFieldModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';
import { FormPessoasComponent } from './components/form-pessoas/form-pessoas.component';
import { CadastroDePessoasComponent } from './pages/cadastro-de-pessoas/cadastro-de-pessoas.component';
import { CardPessoaComponent } from './components/card-pessoa/card-pessoa.component';
import { TablePessoaComponent } from './components/table-pessoa/table-pessoa.component';


@NgModule({
  declarations: [
    AppComponent,
    FormPessoasComponent,
    CadastroDePessoasComponent,
    CardPessoaComponent,
    TablePessoaComponent
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
