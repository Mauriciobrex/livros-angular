import { LivroDados } from './livro-dados/livro-dados';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivroLista } from './livro-lista/livro-lista';


const routes: Routes = [
  { path: '', redirectTo: 'livros', pathMatch: 'full' },
  { path: 'livros', component: LivroLista },
  { path: 'novo', component: LivroDados }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
