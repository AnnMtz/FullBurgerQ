import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenusComponent } from './components/menus/menus.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';

const appRoutes: Routes = [
    {path: '', component:RegisterComponent},
    {path: 'login', component:LoginComponent},
    {path: 'navbar', component:NavbarComponent},
    {path: 'menus', component:MenusComponent},
    {path: 'pedidos', component:PedidosComponent},
    {path: '**', component:RegisterComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);