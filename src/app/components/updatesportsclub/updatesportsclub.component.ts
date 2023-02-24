import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SportsclubService } from 'src/app/service/sportsclub.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updatesportsclub',
  templateUrl: './updatesportsclub.component.html',
  styleUrls: ['./updatesportsclub.component.css']
})
export class UpdatesportsclubComponent implements OnInit {
  form : any = FormGroup;


  constructor(
    private formBuilder : FormBuilder,
    private sportsclubService : SportsclubService,
    private router:Router,
    public dialogRef:MatDialogRef<UpdatesportsclubComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any
    ) { }

  ngOnInit(): void {
     this.form = this.formBuilder.group({
      clubName :[this.data.clubName,[Validators.required]],
      contactNo :[this.data.contactNo,[Validators.required]],
      location :[this.data.location,[Validators.required]],
     })
  }

  noThanks() {
    window.location.reload()
  }

  onSubmit(){
     console.log(this.data)
     this.sportsclubService.updateSportsClub(this.data.clubId,this.form.value).subscribe(result => {
      console.log(result)
      Swal.fire("Updated successFully");
       this.gotoClubsList();
     })
  }

   gotoClubsList(){
    window.location.reload();
    this.router.navigate(['/sportsClubDetails']);
   }

   

  get clubName(){
    return this.form.get('clubName')
  }
  
  get location(){
    return this.form.get('location')
  }
  
  get contactNo(){
    return this.form.get('contactNo')
  }


}