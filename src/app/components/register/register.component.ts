import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Admin } from 'src/app/model/admin';
import { AdminService } from 'src/app/service/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {

  
  

  constructor(private adminservice: AdminService,private cookies:CookieService, private snack:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
   
  }

  adminForm=new FormGroup({
    adminName:new FormControl('',[Validators.required]),
    adminEmail:new FormControl('',[Validators.required, Validators.email]),
    adminAge:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required, Validators.minLength(6)])

  })

  get adminName(){
    return this.adminForm.get('adminName');
  }

  get adminEmail(){
    return this.adminForm.get('adminEmail');
  }

  get adminAge(){
    return this.adminForm.get('adminAge');
  }
  get password(){
    return this.adminForm.get('password')
  }

  getErrorMessage() {
    return this.adminEmail?.hasError('required') ? 'Enter your email' :
      this.adminEmail?.hasError('email') ? 'Not a valid email' : ""
   }

   getPasswordError(){
    return this.password?.hasError('required') ? 'Enter your password' :  
    this.password?.hasError('minLength') ? 'minimum 6 chars are allowed' : ''
  }


  public onSubmit(){
    if(this.adminForm.invalid){
      alert("please provide all fields");
      return
    }

    this.adminservice.addAdmin(this.adminForm.value).subscribe(

      (data)=>{
        console.log(data)
        //console.log(this.adminForm.value)
        Swal.fire("Signed up","","success")
        this.router.navigate(["/login"]);
      },(error)=>{
        console.log(error);
        alert("check all fields unable to signup")
        
      }

    )
   
  }


}
