import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jogoDaForca';

  constructor(
    private router: Router,
  ) { }

  navegar(caminho: string){
    this.router.navigateByUrl(caminho)
  }
}
