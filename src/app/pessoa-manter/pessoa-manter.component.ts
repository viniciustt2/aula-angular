import { Pessoa } from './../pessoa/pessoa';
import { Component, OnInit, Output ,EventEmitter, Input } from '@angular/core';



@Component({
  selector: 'app-pessoa-manter',
  templateUrl: './pessoa-manter.component.html',
  styleUrls: ['./pessoa-manter.component.css']
})
export class PessoaManterComponent {

  titulo = 'Cadastro pessoa';
  texto = 'vinicius';

  @Output() pessoaEmitir: EventEmitter<Pessoa> = new EventEmitter();

 

  @Input('pessoa')  pessoa: Pessoa = new Pessoa();

  @Input() displayPai: string;
  @Output() display: EventEmitter<string> = new EventEmitter();
  @Output() pessoaVoltar: EventEmitter<Pessoa> = new EventEmitter();

  pessoaTemp =  JSON.parse(JSON.stringify(this.pessoa));

 

  listaPessoa: Pessoa[] = [
 
  ];

  listaEstado: string [] = ['AC','PE','PA'];

  listaMunicipios: any[] = [
    // { codigo: "1", nome:"recife"},
    // { codigo: "2", nome:"vitoria"},
    // { codigo: "3", nome:"bezerros"},
    // { codigo: "4", nome:"caruaru"},

  ];



  imprimir() {
    alert(` Codigo:${this.pessoa.codigo}\n Nome: ${this.pessoa.nome} \n Telefone: ${this.pessoa.telefone} \n Data de Nascimento: ${this.pessoa.data} \n Endereço: ${this.pessoa.endereco} \n Bairro:${this.pessoa.bairro} \n Cidade:${this.pessoa.cidade} \n Estado:${this.pessoa.estado}`);

  }

  
  // incluir() {
  
  // }
  alterar(){
    this.pessoaEmitir.emit(this.pessoa);
    this.pessoa = new Pessoa();
    this.displayPai = "pesquisar";
    this.display.emit(this.displayPai);
  }
  voltar(){
    this.displayPai = "pesquisar";
    this.pessoaVoltar.emit(this.pessoaTemp);
    this.display.emit(this.displayPai);
  }

  carregarCidade(){
    
    if(this.pessoa.estado == 'PE'){
      this.listaMunicipios = [
        {codigo: "1", nome:"Recife"}
      ];
    }else if(this.pessoa.estado == 'PB'){
      this.listaMunicipios = [
        {codigo: "2", nome:"Joao pessoa"}
      ];
    }else{
      this.listaMunicipios = [
        {codigo: "3", nome:"bezerros"},
        {codigo: "4", nome:"caruaru"}
      ];
    }
  }

  remover(pessoa : Pessoa){
     let index = this.listaPessoa.indexOf(pessoa);
     this.listaPessoa.splice(index,1);
  }


  constructor() { }




}
