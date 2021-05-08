import { createComponent } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  {path:'inventory', redirectTo:'inventory/index', pathMatch:'full'},
  {path:'inventory/index',component:IndexComponent},
  {path:'inventory/:inventoryId/view',component:ViewComponent},
  {path:'inventory/create', component : CreateComponent},
  {path:'inventory/:inventoryId/edit',component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
