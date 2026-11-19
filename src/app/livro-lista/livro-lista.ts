
import { Component } from '@angular/core';
import { Livro } from '../livro';
import { ControleLivros } from '../controle-livros';
import { ControleEditora } from '../controle-editora';

@Component({
  selector: 'app-livro-lista',
  standalone: false,
  templateUrl: './livro-lista.html',
  styleUrl: './livro-lista.css'
})
export class LivroLista {

  livros: Livro[] = [];

  constructor(
    private controleLivros: ControleLivros,
    private controleEditora: ControleEditora
  ) {
    this.livros = this.controleLivros.obterLivros();
  }

  
obterNomeEditora(codEditora: number): string {
  console.log(
    'Código da editora:',
    codEditora,
    'Tipo:',
    typeof codEditora
  );

  return this.controleEditora.getNomeEditora(codEditora);
}


  excluir(codigo: number): void {
    this.controleLivros.excluir(codigo);
    this.livros = this.controleLivros.obterLivros();
  }
}
