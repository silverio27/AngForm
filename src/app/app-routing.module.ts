import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormPessoasComponent } from "./form-pessoas/form-pessoas.component";
import { ListPessoasComponent } from "./list-pessoas/list-pessoas.component";

const routes: Routes = [
  { path: 'list-pessoas', component: ListPessoasComponent },
  { path: 'form-pessoas', component: FormPessoasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
