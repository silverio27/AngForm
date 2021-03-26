import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoasRoutingModule } from './pessoas-routing.module';
import { PoFieldModule, PoModule } from '@po-ui/ng-components';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardPessoaComponent } from './components/card-pessoa/card-pessoa.component';
import { FormPessoasComponent } from './components/form-pessoas/form-pessoas.component';
import { TablePessoaComponent } from './components/table-pessoa/table-pessoa.component';
import { CadastroDePessoasComponent } from './pages/cadastro-de-pessoas/cadastro-de-pessoas.component';


@NgModule({
  declarations: [
    CardPessoaComponent,
    FormPessoasComponent,
    TablePessoaComponent,
    CadastroDePessoasComponent
  ],
  imports: [
    CommonModule,
    PessoasRoutingModule,
    PoModule,
    PoFieldModule,
    FormsModule
  ]
})
export class PessoasModule { }
