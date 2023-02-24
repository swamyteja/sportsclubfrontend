import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../model/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http:HttpClient) { }

  private baseUrl = "http://localhost:9090/player"

  createPlayer(Player : Player):Observable<any>{
    return this.http.post(`${this.baseUrl}/createplayer`,Player);
  }
   
  getPlayerById(playerId : number):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/readbyplayerid/${playerId}/`);
  }

  getPlayersList():Observable<Player[]>{
    return this.http.get<any>(`${this.baseUrl}/getPlayerList`)
  }

  deletePlayer(id : number):Observable<any>{

    return this.http.delete(`${this.baseUrl}/deleteplayer/${id}`);
  }

  updatePlayer(playerId : number,playerAge:number,player:any):Observable<any>{
    console.log(playerAge);

    return this.http.put<any>(`${this.baseUrl}/updatePlayer/${playerId}/${playerAge}`,player);
  }

}


