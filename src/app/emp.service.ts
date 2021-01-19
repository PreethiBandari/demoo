import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  public isUserLogged: boolean;

  constructor(public httpClient: HttpClient) { 
    this.isUserLogged = false;
  }

  public setUserLoggedIn(): void {
    this.isUserLogged = true;
  }

  public getUserLogged(): any {
    return this.isUserLogged;
  }
  
  //When user is clicking on logout button
   public setUserLoggedOut(): void {
    this.isUserLogged = false;
  }

  //this is for emp.service.ts
  getAllCountries(): any{
     return this.httpClient.get('https://restcountries.eu/rest/v2/all');

  }
 
  
 
}
