import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SportsClub } from '../model/sports-club';

@Injectable({
  providedIn: 'root'
})
export class SportsclubService {

  constructor( private http: HttpClient) { }

  private baseUrl = "http://localhost:9090/sportsclub"

  createSportsclub(SportClub : SportsClub) {
    return this.http.post(`${this.baseUrl}/createSportsClub`,SportClub);
  }

  getSportsClubList():Observable<SportsClub[]>{
    return this.http.get<any>(`${this.baseUrl}/getsportsClubList`);
  }

  getSportsClub(clubId : any):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/readbyclubid/${clubId}`);
  }


  deleteClub(id : number):Observable<any>{

    return this.http.delete(`${this.baseUrl}/deleteclub/${id}`);
  }

  
  updateSportsClub(clubId : number,sportsClub:any):Observable<any>{
    
    return this.http.put(`${this.baseUrl}/upadteSportsClub/${clubId}`,sportsClub);
  }



}


