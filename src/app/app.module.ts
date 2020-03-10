import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { LateralComponent } from './lateral/lateral.component';
import { MenuComponent } from './menu/menu.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';import { FormsModule } from '@angular/forms';
import { PessoaComponent } from './pessoa/pessoa.component';
import { ProdutoComponent } from './produto/produto.component';
import { PessoaManterComponent } from './pessoa-manter/pessoa-manter.component';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LateralComponent,
    MenuComponent,
    CabecalhoComponent,
    PessoaComponent,
    ProdutoComponent,
    PessoaManterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
