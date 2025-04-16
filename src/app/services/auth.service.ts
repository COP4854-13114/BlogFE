import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Token } from '../models/token.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  TokenSignal = signal<string | null>(null);
  constructor(private httpClient:HttpClient) {
    let tokenObj = localStorage.getItem('authToken');
    if(tokenObj)
    {
      let token = JSON.parse(tokenObj) as Token;
      this.TokenSignal.set(token.token);
    }
   }

  async Login(username:string,password:string){
    let basichAuth = `Basic `+ btoa(`${username}:${password}`);
    try
    {
      let result = await firstValueFrom( this.httpClient.post<Token>
      ('http://localhost:3000/login',null, { headers:{ Authorization:basichAuth}}));
      localStorage.setItem('authToken', JSON.stringify(result));
      this.TokenSignal.set(result.token);
      return true;
    }
    catch(err)
    {
      console.log(err);
      this.TokenSignal.set(null);
      localStorage.removeItem('authToken');
      return false;
    }
  }
}
