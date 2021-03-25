import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CadastroDePessoasComponent } from "./pages/cadastro-de-pessoas/cadastro-de-pessoas.component";

const routes: Routes = [
  { path: 'cadastro-de-pessoas', component: CadastroDePessoasComponent },
  { path: '', pathMatch: 'full', redirectTo: 'cadastro-de-pessoas' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
