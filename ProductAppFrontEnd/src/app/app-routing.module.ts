import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{LoginComponent} from './login/login.component'
import{ProductAddComponent} from './product-add/product-add.component'
import{ProductEditComponent} from './product-edit/product-edit.component'
import{ProductViewComponent} from './product-view/product-view.component'
import{SignUpComponent} from './sign-up/sign-up.component'
const routes: Routes = [{path:"",component:LoginComponent},{path:"signup",component:SignUpComponent},
{path:"view",component:ProductViewComponent},{path:"edit",component:ProductEditComponent},
{path:"add",component:ProductAddComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
