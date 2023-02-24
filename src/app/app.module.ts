import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SportsclubComponent } from './components/sportsclub/sportsclub.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { SportsclubdetailsComponent } from './components/sportsclubdetails/sportsclubdetails.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PlayerdetailsComponent } from './components/playerdetails/playerdetails.component';
import { CreateplayerComponent } from './components/createplayer/createplayer.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { UpdatedialogComponent } from './components/updatedialog/updatedialog.component';
import {MatDialogModule,MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';

import {MatInputModule} from '@angular/material/input';
import { GamesComponent } from './components/games/games.component';
import { UpdatesportsclubComponent } from './components/updatesportsclub/updatesportsclub.component';
import { UpdategameComponent } from './components/updategame/updategame.component';
import { CreategameComponent } from './components/creategame/creategame.component';
import { CoachComponent } from './components/coach/coach.component';
import { UpdatecoachComponent } from './components/updatecoach/updatecoach.component';
import { CreatecoachComponent } from './components/createcoach/createcoach.component';
import { NotfoundComponent } from './components/notfound/notfound.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    SportsclubComponent,
    SportsclubdetailsComponent,
    PlayerdetailsComponent,
    CreateplayerComponent,
    HomepageComponent,
    UpdatedialogComponent,
    GamesComponent,
    UpdatesportsclubComponent,
    UpdategameComponent,
    CreategameComponent,
    CoachComponent,
    UpdatecoachComponent,
    CreatecoachComponent,
    NotfoundComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule
  ],
  providers: [
    {provide : MAT_DIALOG_DEFAULT_OPTIONS,useValue:{hasBackdrop:false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
