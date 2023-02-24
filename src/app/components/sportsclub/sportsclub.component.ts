import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SportsclubService } from 'src/app/service/sportsclub.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-sportsclub',
  templateUrl: './sportsclub.component.html',
  styleUrls: ['./sportsclub.component.css']
})
export class SportsclubComponent implements OnInit {

  constructor(private service:SportsclubService,private cookies:CookieService,private router: Router
    ) { }

  ngOnInit(): void {
    const jwtToken = this.cookies.get('jwt_token');
    if(!jwtToken){
      this.router.navigateByUrl('/login');
    }
  }

  sportsClub = new FormGroup({
    clubName : new FormControl('',[Validators.required]),
    location : new FormControl('',[Validators.required]),
    contactNo : new FormControl('',[Validators.required])
 })

 onSubmit(){
  if(this.sportsClub.invalid){
    alert("please provide all Fields")
    return
  }


   console.log(this.sportsClub.value);
      this.service.createSportsclub(this.sportsClub.value).subscribe(
     (result)=>{
       console.log(result);
       Swal.fire('SportsClub Registered Succesfully')
     },(error)=>{
       console.log(error.error);
       alert("Please provide valid information")
     }
   )
 }


get clubName(){
  return this.sportsClub.get('clubName')
}

get location(){
  return this.sportsClub.get('location')
}

get contactNo(){
  return this.sportsClub.get('contactNo')
}


}
