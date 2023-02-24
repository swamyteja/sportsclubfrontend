import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CoachService } from 'src/app/service/coach.service';
import { GameService } from 'src/app/service/game.service';
import { PlayerService } from 'src/app/service/player.service';
import { SportsclubService } from 'src/app/service/sportsclub.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-createplayer',
  templateUrl: './createplayer.component.html',
  styleUrls: ['./createplayer.component.css']
})
export class CreateplayerComponent implements OnInit {
  newPlayer: any;
  playerForm: any;
  clubList : any;
  gamesList : any;
  coachList: any;
  Genders = ["Male", "Female", "Others"] ;

  constructor( private playerService: PlayerService,private sportClubService: SportsclubService,
    private coachService: CoachService,
    private gameService : GameService,
    private cookies:CookieService,private router: Router) { }

  ngOnInit(): void {

    const jwtToken = this.cookies.get('jwt_token');
    if(!jwtToken){
      this.router.navigateByUrl('/login');
    }
    this.sportClubService.getSportsClubList().subscribe((data) => {
      this.clubList = data;
      console.log(this.clubList)
    });

    // this.coachService.getCoachList().subscribe(data => 
    //   this.coachList = data);

    // this.gameService.getGamesList().subscribe(data => {
    //   this.gamesList = data
    //   })

    this.playerForm = new FormGroup({
      playerName : new FormControl('',[Validators.required]),
      playerAge : new FormControl('',[Validators.required]),
      playerGender : new FormControl('0',[Validators.required]),
      playerContactNo : new  FormControl('',[Validators.required]),
      gameId : new FormControl('0',[Validators.required]),
      coachId : new FormControl('0',[Validators.required]),
      clubId : new FormControl('0',[Validators.required])
    })
  }

  


  onSubmit(){

    if(this.playerForm.invalid){
      alert("please provide all Fields")
      return
    }


    this.newPlayer = {
        playerName: this.playerForm.value.playerName,
        playerAge:this.playerForm.value.playerAge,
        playerContactNo:this.playerForm.value.playerContactNo,
        sportsClub:{
            clubId:this.playerForm.value.clubId
        },
        game: {
            gameId: this.playerForm.value.gameId
        },
        coach:{
            coachId: this.playerForm.value.coachId
        }
    }
    //console.log(this.newPlayer)
 
     
    this.playerService.createPlayer(this.newPlayer).subscribe(
      (data) => {
        console.log(data)
        Swal.fire("Created Successfully")
        this.playerForm.reset();
        window.location.reload();
        
      },(error)=>{
        console.log(error);
        Swal.fire("check all fields unable to create","","error")

      }
    )
  }
 
  findGame(event : any ){
    console.log(event.target.value)
    this.gameService.getGameById(event.target.value).subscribe(
      (data) => {
        console.log(data);
        this.coachList = data.coach;
      }
    )
  }

  findClub(event : any){
    console.log(event.target.value)
    this.sportClubService.getSportsClub(event.target.value).subscribe(
      
      (data)=>{
       this.gamesList = data.game;
       
  }
    )
 }

  get f(){return  this.playerForm.controls}

}

