import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coach } from '../model/coach';

@Injectable({
  providedIn: 'root'
})
export class CoachService {

  constructor(private http : HttpClient) { }

  private baseUrl = "http://localhost:9090/coach";
 
    createCoach(coach : Coach):Observable<any>{
    return this.http.post(`${this.baseUrl}/createCoach`,coach);
  }
  
  
  getCoachList():Observable<Coach[]>{
    return this.http.get<any>(`${this.baseUrl}/getCoachList`)
  }

  deleteCoach(coachId : number):Observable<any>{

    return this.http.delete(`${this.baseUrl}//deleteCoach/${coachId}`);
  }

  updatePlayer(coachId : number,coachExp:number,coach:any):Observable<any>{
    console.log(coachExp);

    return this.http.put<any>(`${this.baseUrl}/upadteCoachExperience/${coachId}/${coachExp}`,coach);
  }


}
