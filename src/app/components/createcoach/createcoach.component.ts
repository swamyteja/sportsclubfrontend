import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Game } from 'src/app/model/game';
import { CoachService } from 'src/app/service/coach.service';
import { GameService } from 'src/app/service/game.service';
import { SportsclubService } from 'src/app/service/sportsclub.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-createcoach',
  templateUrl: './createcoach.component.html',
  styleUrls: ['./createcoach.component.css']
})
export class CreatecoachComponent implements OnInit {
  clubList:any
  newCoach: any
  coachForm : any
  gamesList : any;


  constructor(private coachservice : CoachService, private gameService : GameService,
    private sportsclubservice: SportsclubService,private cookies:CookieService,private router: Router) { }

  ngOnInit(): void {

    const jwtToken = this.cookies.get('jwt_token');
    if(!jwtToken){
      this.router.navigateByUrl('/login');
    }

    // this.gameService.getGamesList().subscribe(data => {
    //   this.gamesList = data
    //   })

      this.sportsclubservice.getSportsClubList().subscribe((data) => {
      this.clubList = data;
      console.log(this.clubList)
    }
    );

    this.coachForm = new FormGroup({
      coachName : new FormControl('',[Validators.required]),
      coachExperience : new FormControl('',[Validators.required]),
      coachSpecialization : new FormControl('',[Validators.required]),
      gameId : new FormControl('0',[Validators.required]),
      clubId : new FormControl('0',[Validators.required])
    })
    }
    



    

  onSubmit() {
    if(this.coachForm.invalid){
      alert("please provide all Fields")
      return
    }

    this.newCoach = {
      coachName : this.coachForm.value.coachName,
      coachExperience : this.coachForm.value.coachExperience,
      coachSpecialization : this.coachForm.value.coachSpecialization,
      game:{
        gameId:this.coachForm.value.gameId
      },
      sportsClub:{
        clubId:this.coachForm.value.clubId
      },
    }
    console.log(this.newCoach)
    this.coachservice.createCoach(this.newCoach).subscribe(
      (data) => {
        console.log(data)
        Swal.fire("Coach Created successFully");
        this.coachForm.reset();
        window.location.reload();
      },(error) => {
        console.log(error);
        Swal.fire("check all fields unable to create","","error")
      }
    )

  }


  findClub(event : any){
    console.log(event.target.value)
    this.sportsclubservice.getSportsClub(event.target.value).subscribe(
      
      (data)=>{
       this.gamesList = data.game;
       
  }
    )
 }

  get f(){return  this.coachForm.controls}
}
