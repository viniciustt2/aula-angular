import { Component, OnInit } from '@angular/core';
import { Produto } from './produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {

  produto: Produto = new Produto();

  listaProduto: Produto [] = [];

  listaUnidade: string [] = ['UN','KG','L','M'];

  
  
  
  constructor() { }

  adicionarProduto(){
      this.listaProduto.push(this.produto);
      this.produto = new Produto();
  }

  apagar(produto: Produto){
      let index = this.listaProduto.indexOf(produto);
      this.listaProduto.splice(index,1);
  }

}
