import { Routes } from '@angular/router';
import {ListComponent} from "./features/list/list.component";
import {createComponent} from "@angular/core";
import {CreateComponent} from "./features/create/create.component";

export const routes: Routes = [
  {
  path: '',
  component: ListComponent
},
  {
    path: 'create-product',
    component: CreateComponent
  }
];
