import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CadastroDePessoasComponent } from "./pages/cadastro-de-pessoas/cadastro-de-pessoas.component";

const routes: Routes = [
  { path: "cadastro", component: CadastroDePessoasComponent },
  { path: "", pathMatch: "full", redirectTo: "cadastro" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PessoasRoutingModule {}
