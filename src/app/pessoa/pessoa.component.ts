import { Pessoa } from './pessoa';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent {

  titulo = 'Cadastro pessoa';
  texto = 'vinicius';

  mostrar = false;

  pessoa: Pessoa = new Pessoa();

  display: string ="pesquisar";

  listaPessoa: Pessoa[] = [
        {
        "codigo": "1", 
        "nome": "vinicius", 
        "telefone":  "99999",
        data : new Date(),
        "endereco" : "aaaa", 
        "bairro" : "centro",
        "cidade" : "Recife",
        "estado" : "PE",
        "ativo" : false
    }
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

  estadoIncluir() {
    this.display = "incluir";
  }
  incluir(pessoa) {
    this.listaPessoa.push(pessoa);
    this.pessoa = new Pessoa();

   
  }
  editar(pessoa){
    this.display = "editar";
    this.pessoa = pessoa;
  }
  alterar(evento){
    this.display = evento;
  }
  voltar(evento){
    this.display = evento;
    this.pessoa = this.pessoa;
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
