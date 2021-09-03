import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InventoryCategory } from '../Models/InventoryCategory';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryInventoryService {

  constructor(private http: HttpClient) { }

  getCategoryAPI()
  {
    return this.http.get(`https://localhost:5001/GetAllInventoryCategory`)
  }
  deleteCategoryAPI(Id:any)
  {
    return this.http.delete(`https://localhost:5001/DeleteInventoryCategory?Id=${Id}`);
  
  }
  ADDCategory(InventoryCategory:InventoryCategory): Observable<object>

 {
   return this.http.post<any>(`https://localhost:5001/AddInventoryCategory`,InventoryCategory)
 
 }
 UpdateInventryCategory(val: InventoryCategory): Observable<object> 
 {
   return this.http.post<any>(`https://localhost:5001/UpdateInventoryCategory`,val)
 }

 GetByID(Id: number): Observable<any> {
  return this.http.get<any>(`https://localhost:5001/GetInventoryCategoryById?Id=${Id}`);
}
}
