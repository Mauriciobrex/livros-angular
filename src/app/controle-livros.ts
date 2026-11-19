
import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivros {

  private livros: Livro[] = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: 'Use a Cabeça! Java',
      resumo: 'Introdução à programação Java.',
      autores: ['Kathy Sierra', 'Bert Bates']
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: 'Java, Como Programar',
      resumo: 'Fundamentos da linguagem Java.',
      autores: ['Paul Deitel', 'Harvey Deitel']
    }
  ];

  obterLivros(): Livro[] {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const maiorCodigo = this.livros.reduce(
      (maior, atual) => Math.max(maior, atual.codigo),
      0
    );

    livro.codigo = maiorCodigo + 1;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    this.livros = this.livros.filter(
      livro => livro.codigo !== codigo
    );
  }
}

