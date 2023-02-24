import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AdminService } from 'src/app/service/admin.service';
import { AuthserviceService } from 'src/app/service/authservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : any;
  admins : any;
  registeredUser: any;

  constructor(private adminService: AdminService,private authService:AuthserviceService, private router : Router,private cookies:CookieService) { }

  ngOnInit(): void {
    const jwtToken = this.cookies.get('jwt_token');
    
    if(jwtToken){
      this.router.navigateByUrl('/homepage');
    }

    this.loginForm = new FormGroup({
      adminEmail : new FormControl('',[Validators.required]),
       password : new FormControl('',[Validators.required])
    })

    this.adminService.getAllAdmins().subscribe(data => {
      this.admins = data;
    })

    
  }
  
 onSubmit(){
   
  if(this.loginForm.invalid){
    return
  }

   this.registeredUser = this.admins.find((admin : {adminEmail: any;}) => admin.adminEmail === this.loginForm.value.adminEmail)
  
   if(this.registeredUser !== undefined && this.registeredUser.password === this.loginForm.value.password){
     const requestBody = {adminEmail : this.loginForm.value.adminEmail,password:this.loginForm.value.password}
      this.authService.generateToken(requestBody).subscribe((data) => {
    
        const parsedData = JSON.parse(data);
        this.cookies.set('jwt_token',parsedData.JWT,{expires : 30} )
      })
      
      window.location.reload()
      
      
      //this.router.navigateByUrl('/homepage');
      
   }else{
     alert("Admin doesn't exists");
   }

    }

  get f(){return this.loginForm.controls}
}
