import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Palavra, TecladoUm, TecladoDois} from './content'

@Component({
  selector: 'app-partida',
  templateUrl: './partida.component.html',
  styleUrls: ['./partida.component.scss']
})
export class PartidaComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  palavra
  tecladoUm
  tecladoDois
  chances = [false, false, false, false, false, false]
  acerto = 0
  indexErro = 0
  indexAcerto = 0

  ngOnInit() {
    this.palavra = [...Palavra]
    this.tecladoUm = [...TecladoUm]
    this.tecladoDois = [...TecladoDois]
    this.palavra.forEach(palavra => {
      palavra.acertada = false
    });
    this.tecladoUm.forEach(palavra => {
      palavra.ativa = true
    });
    this.tecladoDois.forEach(palavra => {
      palavra.ativa = true
    });
    this.acerto = 0
    this.indexErro = 0
    this.indexAcerto = 0
  }

  selecionar(letraEscolhida){
    console.log(letraEscolhida);
    let indexUm = this.tecladoUm.indexOf(letraEscolhida)
    let indexDois = this.tecladoDois.indexOf(letraEscolhida)
    
    if(indexUm >= 0){
      this.tecladoUm[indexUm].ativa = false
    }else{
      this.tecladoDois[indexDois].ativa = false
    }

    let acerto = false
    for (let i = 0; i < this.palavra.length; i++) {
      console.log("Letra escolhida: ", letraEscolhida);
      console.log("Letra certa: ", this.palavra[i]);
      
      if(this.palavra[i].letra == letraEscolhida.letra){
        this.palavra[i].acertada = true
        acerto = true
        this.indexAcerto++
      }
    }
    if(acerto){
      this.acerto++
    }else{
      this.chances[this.indexErro] = true
      this.indexErro++
    }
    setTimeout(()=>{
      this.checarVitoria()
    }, 100)
  }

  checarVitoria(){
    if(this.indexErro == 6){
      alert("Derrota!")
      this.router.navigateByUrl('/ranking')
    }
    if(this.indexAcerto == this.palavra.length){
      alert("Vitoria!")
      this.router.navigateByUrl('/ranking')
    }
  }

  ngOnDestroy(){
    this.palavra = undefined
    this.tecladoUm = undefined
    this.tecladoDois = undefined
  }

}
