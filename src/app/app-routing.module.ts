import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: 'pessoas', 
    loadChildren: () => import('./pessoas/pessoas.module').then(m => m.PessoasModule)
  },
  { path: '', pathMatch: 'full', redirectTo: 'pessoas' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
