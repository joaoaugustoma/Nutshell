import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClienteComponent} from './cliente.component';
import {ClienteFormComponent} from './cliente-form/cliente-form.component';
import {ClienteListComponent} from './cliente-list/cliente-list.component';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {ClienteRoutes} from "./cliente.routing";


@NgModule({
  declarations: [
    ClienteComponent,
    ClienteFormComponent,
    ClienteListComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(ClienteRoutes)
  ]
})
export class ClienteModule { }
