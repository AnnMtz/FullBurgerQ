import { Component, OnInit } from '@angular/core';
import { Menu } from '../../models/menu';
import { MenuService } from '../../services/menu.service';


@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  providers: [MenuService]
})
export class MenusComponent implements OnInit {

  mostrarDesayuno = false;
  mostrarComida = false;
  public title: string;
  public text: string;
  public menu: Menu;
  public status: boolean;

  constructor(
    private _menuService: MenuService
  ) { 
    this.title = "Burger Queen";
    this.text = "Todos nuestros alimentos son únicos y de alta calidad";
    
    this.menu = new Menu('',null,null,null,null,null,null,null,null,null,null,null,null,null,'');
  }

  ngOnInit() {
  }

  onSubmit(form){
    this._menuService.saveMenu(this.menu).subscribe(
      response => {
        if(response.menu){
          this.status = true;
          form.reset();
        }
        else{
          this.status = false;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
