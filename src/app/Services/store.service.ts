import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  readonly APIUrl = "https://localhost:5001/";
  

  constructor(private http:HttpClient) { }

  getStoreList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'GetAllStores');
  }

  addStore(val:any):Observable<any[]>{
    return this.http.post<any>(this.APIUrl+'AddNewStore',val);
  }

  deleteStore(val:any){
    return this.http.delete<any>(this.APIUrl+'DeleteStore?id='+val)
  }

  getStoreById(val:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'GetStoreById?id='+val)
  }


}
