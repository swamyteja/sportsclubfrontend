import { Component, OnInit } from '@angular/core';
import { NavigationEnd,Event, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  displayHeader : boolean = true;
 
  showLogout : boolean = false;

  currentUrl : any;

  constructor(private router: Router, private cookies: CookieService) {  
     router.events.subscribe((event : Event) => {
      if(event instanceof NavigationEnd){
        //this.currentUrl = event.url;
   
        if(event.url === '/login' || event.url === '/' || event.url === '/signup' ){
            this.showLogout = false;
        }else if(event.url === '/homepage'  || event.url === '/sportsClub' || event.url === '/player' || event.url === '/playerDetails'|| event.url === '/sportsClubDetails'|| event.url === '/createPlayer' || event.url === '/games' || event.url === '/creategame' || event.url === '/coach' || event.url === '/createCoach' ){
          this.showLogout = true;       
        }else{
          this.displayHeader = true;
        }

     }
    }) 
  }

  ngOnInit(): void {
  }
   
  
  onLogOut(){
    this.cookies.delete('jwt_token');
    window.location.reload();
  }

}
