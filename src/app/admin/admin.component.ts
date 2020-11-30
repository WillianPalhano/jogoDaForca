import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
    private router: Router
  ) { }
  pessoas = [
    {
      nome: "Willian Palhano",
      online: true
    },
    {
      nome: "Vitor Ribeiro",
      online: true
    },
    {
      nome: "Jorge Azevedo",
      online: true
    },
    {
      nome: "Ana Catarina",
      online: false
    },
    {
      nome: "Vinicius Florença",
      online: false
    },
    {
      nome: "Natalia Ramos",
      online: false
    },
    {
      nome: "Gabriel Christian",
      online: false
    },
  ]
  pessoasSelecionadas = [ ]
  ngOnInit() {
  }

  selecionar(pessoa){
    if(this.pessoasSelecionadas[0] == undefined){
      this.pessoasSelecionadas[0] = pessoa
    } else if(this.pessoasSelecionadas[1] == undefined){
      this.pessoasSelecionadas[1] = pessoa
    }
  }

  excluir(indice){
    console.log("apagando ", indice);
    
    this.pessoasSelecionadas[indice] = undefined
  }

  navegar(caminho: string){
    this.router.navigateByUrl(caminho)
  }

}
