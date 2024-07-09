import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shop } from '../models/shop.model';

const API_SHOP = "http://localhost:3000/api/shop"
@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http:HttpClient) {}

  getAllShop(): Observable<Shop[]> {
    return this.http.get<Shop[]>(`${API_SHOP}`)
  }
  getOneShop(id:number): Observable<Shop>{
    return this.http.get<Shop>(`${API_SHOP}/${id}`)
  }
  postShop(dto:Shop): Observable<Shop>{
    return this.http.post<Shop>(`${API_SHOP}`, dto)
  }
  editShop(id:number, dto:Shop): Observable<Shop>{
    return this.http.put<Shop>(`${API_SHOP}/${id}`, dto)
  }
  deleteShop(id:number){
    return this.http.delete<Shop>(`${API_SHOP}/${id}`)
  }
}
