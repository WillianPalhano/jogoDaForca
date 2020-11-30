import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  constructor() { }

  
  pessoas = [
    {
      nome: "Willian Palhano",
      acertos: 13
    },
    {
      nome: "Vitor Ribeiro",
      acertos: 12
    },
    {
      nome: "Jorge Azevedo",
      acertos: 10
    },
    {
      nome: "Ana Catarina",
      acertos: 9
    },
    {
      nome: "Vinicius Florença",
      acertos: 6
    },
    {
      nome: "Natalia Ramos",
      acertos: 5
    },
    {
      nome: "Gabriel Christian",
      acertos: 5
    },
  ]

  ngOnInit() {
  }

}
