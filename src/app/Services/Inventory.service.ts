import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

constructor(private http:HttpClient) { }

getCategoryAPI()
  {
    return this.http.get(`https://localhost:5001/GetAllInventory`)
  }
DeleteCategory(Id)
{
  return this.http.delete(`https://localhost:5001/DeleteInventory?Id=${Id}`)
}

}
