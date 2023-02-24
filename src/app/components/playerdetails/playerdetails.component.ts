import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Player } from 'src/app/model/player';
import { PlayerService } from 'src/app/service/player.service';
import Swal from 'sweetalert2';
import { UpdatedialogComponent } from '../updatedialog/updatedialog.component';

@Component({
  selector: 'app-playerdetails',
  templateUrl: './playerdetails.component.html',
  styleUrls: ['./playerdetails.component.css']
})
export class PlayerdetailsComponent implements OnInit {
  
  playerAge:any;
  

  constructor(private playerService: PlayerService, private router: Router,public matDialog: MatDialog,private cookies: CookieService) { }

  ngOnInit(): void {
    const jwtToken = this.cookies.get('jwt_token');
    if(!jwtToken){
      this.router.navigateByUrl('/login');
    }

    
  }

  
  playerList = this.playerService.getPlayersList();

  displayedColumns : string[] = ['playerId','playerName','playerAge','playerContactNo','coachName','clubId','delete','update'];

  dataSource = this.playerList;


  onClickDeletePlayer(id : any){
    //console.log(id)
    this.playerService.deletePlayer(id).subscribe();
    window.location.reload()
  }

  onClickUpdatePlayer(id : any ){

    const dialogConfig = new MatDialogConfig();
     
    const dialogRef = this.matDialog.open(UpdatedialogComponent,{
      width:'500px',
      data : {playerAge : this.playerAge},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
       this.playerService.updatePlayer(id,result,this.playerAge).subscribe();
       Swal.fire("Updated SuccessFully")
      window.location.reload();
   
    })


}

}
