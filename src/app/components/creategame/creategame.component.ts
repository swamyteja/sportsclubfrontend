import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { GameService } from 'src/app/service/game.service';
import { SportsclubService } from 'src/app/service/sportsclub.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-creategame',
  templateUrl: './creategame.component.html',
  styleUrls: ['./creategame.component.css']
})
export class CreategameComponent implements OnInit {
  newGame: any
  gameForm : any
  clubList:any
  uniqueGame: any;
  allGames : any;

  constructor(private gameService : GameService,private sportsclubservice: SportsclubService,private cookies:CookieService,private router: Router) { }

  ngOnInit(): void {

    const jwtToken = this.cookies.get('jwt_token');
    if(!jwtToken){
      this.router.navigateByUrl('/login');
    }

    this.gameService.getGamesList().subscribe((data) => {
      this.allGames = data;
    })

    this.sportsclubservice.getSportsClubList().subscribe((data) => {
      this.clubList = data;
      console.log(this.clubList)
    });
    

    this.gameForm = new FormGroup({
      gameName : new FormControl('',[Validators.required]),
      gameCoachingFee : new FormControl('',[Validators.required]),
      clubId : new FormControl('0',[Validators.required])
    })
  }    

  onSubmit() {
    if(this.gameForm.invalid){
      alert("please provide all Fields")
    }else{
      this.uniqueGame = this.allGames.find((game : {gameName : any }) => game.gameName === this.gameForm.value.gameName)
      if(this.uniqueGame == undefined){

        this.newGame = {
          gameName : this.gameForm.value.gameName,
          gamingRole : this.gameForm.value.gamingRole,
          gameCoachingFee : this.gameForm.value.gameCoachingFee,
          sportsClub:{
            clubId:this.gameForm.value.clubId
          }
        }
        console.log(this.newGame)
        this.gameService.createGame(this.newGame).subscribe(
          (data) => {
            console.log(data)
            Swal.fire("Game Created successFully")
            this.gameForm.reset();
            window.location.reload();
          },(error) => {
            console.log(error);
            Swal.fire("check all fields unable to create","","error")
          }
        )
      }else{
        alert("gameName already Exists");
      }
    }
    

    
   
  }

  get f(){return  this.gameForm.controls}

}
