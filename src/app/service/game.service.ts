import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../model/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http:HttpClient) { }

  private baseUrl = "http://localhost:9090/game"

  createGame(game : Game ):Observable<any>{
    return this.http.post(`${this.baseUrl}/createGame`,game);
  }

  getGamesList():Observable<Game[]>{
    return this.http.get<any>(`${this.baseUrl}/getGameList`);
  }

  getGameById(gameId : any):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}//readbygameid/${gameId}`);
  }

  deleteGame(id: number) : Observable<any>{
    return this.http.delete(`${this.baseUrl}/deletegame/${id}`);
  }

  updateGame(gameId:number, game : any): Observable<any>{
    
    return this.http.put<any>(`${this.baseUrl}/upadtegame/${gameId}`,game);
  }

}


