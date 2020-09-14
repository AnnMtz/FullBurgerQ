import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenusComponent } from './components/menus/menus.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';

const appRoutes: Routes = [
    {path: '', component:MenusComponent},
    {path: 'pedidos', component:PedidosComponent},
    {path: '**', component:MenusComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);