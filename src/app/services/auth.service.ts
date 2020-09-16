import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../../app/models/usuario.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1';
  private apiKey = 'AIzaSyCaYu_bsAmeLO1Ocft1y28VhNUDVaaJrrY';
  userToken: string;

  //Crear nuevos usuarios
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  //Login
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(
    private _httpService: HttpClient
  ) {
    this.leerToken();
   }

  logout(){
    localStorage.removeItem('token');
  }
  
  login( usuario: UsuarioModel ) {
    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true,
    };

    return this._httpService.post(
        `${this.url}/accounts:signInWithPassword?key=${this.apiKey}`, authData 
      ).pipe(
        map( response => {
          this.guardarToken(response['idToken']);
          return response;
        })
      );
  }

  nuevoUsuario( usuario: UsuarioModel ) {
    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true,
    };

    return this._httpService.post(
      `${this.url}/accounts:signUp?key=${this.apiKey}`, authData 
    ).pipe(
      map( response => {
        this.guardarToken(response['idToken']);
        return response;
      })
    );
  }

  private guardarToken( idToken: string ) {

    this.userToken = idToken;
    localStorage.setItem('token', idToken);
  }

  leerToken() {
    if(localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    return this.userToken;
  }

  estaAutenticado(): boolean{

    return this.userToken.length > 2;
  }
}
