import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ModoDeJogoComponent } from './modo-de-jogo/modo-de-jogo.component';
import { PartidaComponent } from './partida/partida.component';
import { RankingComponent } from './ranking/ranking.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'cadastro', component: CadastroComponent},
    { path: 'ranking', component: RankingComponent},
    { path: 'mododejogo', component: ModoDeJogoComponent},
    { path: 'partida', component: PartidaComponent},
    { path: 'admin', component: AdminComponent},
    { path: '',   redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
