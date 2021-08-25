import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

constructor(private http: HttpClient) {
  
 }
 LogIn(Email: String, Password: String) {
   debugger;
  return this.http.post(`https://localhost:44351/LogIn?Email=${Email}&Password=${Password}`, {});

 }
}
