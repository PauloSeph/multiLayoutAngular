import { ProdutoService } from './../../services/produto.service';
import { Product } from './interface/produto.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent{

  constructor(private produtoService: ProdutoService) { }

  public produto: Product = {
    nome: "Joaquin",
    preco: 100.5
  }

  criarProduto(): void {
    this.produtoService.create(this.produto).subscribe(
      () => {
        console.log('Feito')
      }
    )
  }

}
