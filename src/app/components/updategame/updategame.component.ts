import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GameService } from 'src/app/service/game.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updategame',
  templateUrl: './updategame.component.html',
  styleUrls: ['./updategame.component.css']
})
export class UpdategameComponent implements OnInit {

  form : any = FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private gameService : GameService,
    private router:Router,
    public dialogRef:MatDialogRef<UpdategameComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any
    ) { }

    
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      gameName :[this.data.gameName,[Validators.required]],
      gameCoachingFee :[this.data.gameCoachingFee,[Validators.required]],
     })
  }


  onSubmit(){
    console.log(this.data)
    this.gameService.updateGame(this.data.gameId,this.form.value).subscribe(result => {
     console.log(result)
     Swal.fire("Updated successFully");
      this.gotoClubsList();
    })
 }

  gotoClubsList(){
   window.location.reload();
   this.router.navigate(['/games']);
 
  }

  noThanks() {
    window.location.reload()
  }

  get f(){return  this.form.controls}

}


