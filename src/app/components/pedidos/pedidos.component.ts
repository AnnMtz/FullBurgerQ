import { Component, OnInit } from '@angular/core';
import { Menu } from '../../models/menu';
import { MenuService } from '../../services/menu.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  providers: [MenuService]
})
export class PedidosComponent implements OnInit {
  public menus: Menu[];

  constructor(
    private _menuService: MenuService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getMenus();
  }

  getMenus(){
    this._menuService.getMenu().subscribe(
      response => {
        if(response.menus){
          this.menus = response.menus;
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  deleteMenu(id){
    this._menuService.deleteMenu(id).subscribe(
      response => {
        if(response.menu){
          this._router.navigate(['/menus']);
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
