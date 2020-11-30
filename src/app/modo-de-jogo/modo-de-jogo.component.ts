import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modo-de-jogo',
  templateUrl: './modo-de-jogo.component.html',
  styleUrls: ['./modo-de-jogo.component.scss']
})
export class ModoDeJogoComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  navegar(caminho: string){
    this.router.navigateByUrl(caminho)
  }

}
