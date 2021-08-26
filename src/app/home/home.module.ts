import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IndexComponent} from "./index/index.component";
import {CardItemComponent} from "./card-item/card-item.component";
import {HomeComponent} from "./home/home.component";
import {ItemComponent} from "./item/item.component";
import {ListComponent} from "./list/list.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {RouterModule, Routes} from "@angular/router";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MaterialModuleModule} from "../shared/material-module/material-module.module";
import {MaplibModule} from "../maplib/maplib.module";



const routes: Routes = [
  {path:'',redirectTo:'/display/list', pathMatch: 'full' },

  {

    path: 'display',component: SidebarComponent,
    children: [
      {
        path: 'list',
        // loadChildren: () => import('./list/list.module').then(m => m.ListModule)
        component:ListComponent
      },
      {
        path: 'item', component:ItemComponent
        //  loadChildren: () => import('./item/item.module').then(m => m.ItemModule)
      }
    ]
  }


];

@NgModule({
  declarations: [IndexComponent,
    HomeComponent,
    SidebarComponent,
    ItemComponent,
    ListComponent,
    CardItemComponent],
  exports: [

IndexComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MaterialModuleModule,
    MaplibModule,
    RouterModule,
    MatTooltipModule
  ]
})
export class HomeModule { }
