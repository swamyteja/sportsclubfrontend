import { ThisReceiver } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/service/player.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updatedialog',
  templateUrl: './updatedialog.component.html',
  styleUrls: ['./updatedialog.component.css']
})
export class UpdatedialogComponent implements OnInit {


  constructor(public dialogRef:MatDialogRef<UpdatedialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any

    ) { }


  ngOnInit(): void {

  }

  onNoClick(){
    window.location.reload();
}
 
//   form : any = FormGroup;
//   updatedPlayer: any;
//   playerList : any;
//   player : any;

//   constructor(
//     private formBuilder : FormBuilder,
//     private playerService : PlayerService,
//     private router:Router,
//     public dialogRef:MatDialogRef<UpdatedialogComponent>,
//     @Inject(MAT_DIALOG_DATA) public data : any
//     ) { }

//   ngOnInit(): void {
//     this.form = this.formBuilder.group({
//       playerId : [this.data.playerId,[Validators.required]],
//       playerName :[this.data.playerName,[Validators.required]],
//       playerAge :[this.data.playerAge,[Validators.required]],
//       playerContactNo :[this.data.playerContactNo,[Validators.required]],
  
//      })
     
//      this.playerList = this.playerService.getPlayersList().subscribe(data =>
//       {
//         this.playerList = data;
//       })
    
//      this.player = this.playerService.getPlayerById(this.data.playerId).subscribe(data => {
//       this.player = data;
//      });
      
     
//   }

//   onSubmit(){
//     console.log(this.player)
    
//     this.updatedPlayer= {
//       playerName: this.form.value.playerName,
//       playerAge:this.form.value.playerAge,
//       playerContactNo:this.form.value.playerContactNo,
//       sportsClub:{
//           clubId:1
//       },
//       game: {
//           gameId: 1
//       },
//       coach:{
//           coachId: 2
//       }
//     }
//     console.log(this.updatedPlayer);
//     this.playerService.updatePlayer(this.data.playerId,this.updatedPlayer.value).subscribe(result => {
//      console.log(result)
//      Swal.fire("Updated successFully");
//       this.gotoClubsList();
//     })
//  }

//   gotoClubsList(){
//    window.location.reload();
//    this.router.navigate(['/playerDetails']);
 
//   }
  
//    noThanks() {
//      window.location.reload()
//    }

//   get f(){return  this.form.controls}

}
