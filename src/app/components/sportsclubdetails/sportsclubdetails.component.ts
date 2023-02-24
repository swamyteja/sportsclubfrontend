import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SportsclubService } from 'src/app/service/sportsclub.service';
import { UpdatesportsclubComponent } from '../updatesportsclub/updatesportsclub.component';

@Component({
  selector: 'app-sportsclubdetails',
  templateUrl: './sportsclubdetails.component.html',
  styleUrls: ['./sportsclubdetails.component.css']
})
export class SportsclubdetailsComponent implements OnInit {

  location !: string;

  constructor(private sportsClubService: SportsclubService,public matDialog: MatDialog,private cookies:CookieService,private router: Router) { }

  ngOnInit(): void {
    const jwtToken = this.cookies.get('jwt_token');
    if(!jwtToken){
      this.router.navigateByUrl('/login');
    }
  }

  sportsClubList = this.sportsClubService.getSportsClubList();

  displayedColumns : string[] = ['clubId','clubName','contactNo','location','delete','update'];
  dataSource = this.sportsClubList;
  

  onClickDeleteClub(id : any){
  // console.log(id)
  this.sportsClubService.deleteClub(id).subscribe();
  window.location.reload()
  }

  onClickUpdateClub(sportsClub : any){
    const dialogConfig = new MatDialogConfig();
      //console.log(sportsClub)
    const dialogRef = this.matDialog.open(UpdatesportsclubComponent,{
      width:'500px',
      data: sportsClub,
    });


    dialogRef.afterClosed().subscribe((result) => {
      console.log("updated"); 
    })

  }

}

