import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Menu } from '../models/menu';
import { Global } from './global';

@Injectable()

export class MenuService{
    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    testService(){
        return 'Probando el servicio de Angular'
    }

    saveMenu(menu: Menu): Observable<any>{
        let params = JSON.stringify(menu);
        let headers = new HttpHeaders().set('content-type','application/json');

        return this._http.post(this.url + 'save-menu', params, {headers: headers});
    }

    getMenu(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.get(this.url+'menus', {headers:headers});
    }

    deleteMenu(id): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.delete(this.url+'menu/'+id, {headers:headers});
    }
}