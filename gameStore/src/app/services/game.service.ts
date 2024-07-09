import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../models/game.model';

const API_GAMES = "http://localhost:3000/api/game";
@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http:HttpClient) {}

  getAllGames(): Observable<Game[]> {
    return this.http.get<Game[]>(`${API_GAMES}`)
  }
  getOneGame(id:number): Observable<Game>{
    return this.http.get<Game>(`${API_GAMES}/${id}`)
  }
  postGame(dto:Game): Observable<Game>{
    return this.http.post<Game>(`${API_GAMES}`, dto)
  }
  editGame(id:number, dto:Game): Observable<Game>{
    return this.http.put<Game>(`${API_GAMES}/${id}`, dto)
  }
  deleteGame(id:number){
    return this.http.delete<Game>(`${API_GAMES}/${id}`)
  }
}
