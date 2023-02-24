import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CoachService } from 'src/app/service/coach.service';
import Swal from 'sweetalert2';
import { UpdatecoachComponent } from '../updatecoach/updatecoach.component';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css']
})
export class CoachComponent implements OnInit {

  coachExperience !: number;

  constructor(private coachservice: CoachService,
    private cookies:CookieService, private router:Router,public matDialog : MatDialog) { }

  ngOnInit(): void {
    
    const jwtToken = this.cookies.get('jwt_token');
    if(!jwtToken){
      this.router.navigateByUrl('/login');
    }

  }
   coachList = this.coachservice.getCoachList();
  
   displayedColumns : string[] = ['coachId','coachName','coachExperience','coachSpecialization','gameName','clubName','delete','update'];

   dataSource = this.coachList;

   onClickDeleteCoach(id : any){
    //console.log(id)
    this.coachservice.deleteCoach(id).subscribe();
    window.location.reload();
  }
  

  onClickUpdateCoach(id : any){

    const dialogConfig = new MatDialogConfig();
     
    const dialogRef = this.matDialog.open(UpdatecoachComponent,{
      width:'500px',
      data : {coachExperience : this.coachExperience},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
       this.coachservice.updatePlayer(id,result,this.coachExperience).subscribe();
       Swal.fire("Updated SuccessFully")
      window.location.reload();
    })



  }

}



