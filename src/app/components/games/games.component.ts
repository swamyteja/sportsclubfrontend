import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogActions, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { GameService } from 'src/app/service/game.service';
import { SportsclubService } from 'src/app/service/sportsclub.service';
import { UpdategameComponent } from '../updategame/updategame.component';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  gameName !: string;
  clubList : any;

  constructor(private gameService: GameService,
     public matDialog:MatDialog,private cookies:CookieService,private router: Router) { }

  ngOnInit(): void {
    const jwtToken = this.cookies.get('jwt_token');
    if(!jwtToken){
      this.router.navigateByUrl('/login');
     
    }
  }

   
  gameList = this.gameService.getGamesList();

  displayedColumns : string[] = ['gameId','gameName','gameCoachingFee','delete','update'];

  dataSource = this.gameService;

  onClickDeleteGame(id:number){
     console.log(id)

    this.gameService.deleteGame(id).subscribe();
    window.location.reload();

  }
 
  onClickUpdateGame(Game : any){
    const dialogConfig = new MatDialogConfig();


    const dialogRef = this.matDialog.open(UpdategameComponent,{
      width:'500px',
      data : Game ,
    });
    
      dialogRef.afterClosed().subscribe((result) => {
        console.log("Updated")
      })
  }

}



