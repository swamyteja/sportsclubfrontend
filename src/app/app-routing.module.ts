import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachComponent } from './components/coach/coach.component';
import { CreatecoachComponent } from './components/createcoach/createcoach.component';
import { CreategameComponent } from './components/creategame/creategame.component';
import { CreateplayerComponent } from './components/createplayer/createplayer.component';
import { GamesComponent } from './components/games/games.component';
import { HomeComponent } from './components/home/home.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { PlayerdetailsComponent } from './components/playerdetails/playerdetails.component';
import { RegisterComponent } from './components/register/register.component';
import { SportsclubComponent } from './components/sportsclub/sportsclub.component';
import { SportsclubdetailsComponent } from './components/sportsclubdetails/sportsclubdetails.component';

const routes: Routes = [
  {path: 'login',component:LoginComponent},
  {path : 'signup',component:RegisterComponent},
  {path: 'sportsClub',component:SportsclubComponent},
  {path: 'playerDetails',component:PlayerdetailsComponent},
  {path: 'sportsClubDetails',component:SportsclubdetailsComponent},
  {path: 'createPlayer',component:CreateplayerComponent},
  {path: 'homepage',component:HomepageComponent},
  {path: 'games',component:GamesComponent},
  {path: 'creategame',component:CreategameComponent},
  {path: 'coach',component:CoachComponent},
  {path: 'createCoach',component:CreatecoachComponent},
  {path:'',component:HomeComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
