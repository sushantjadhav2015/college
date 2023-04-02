import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CartComponent } from "./shoping/cart/cart.component";
import { CreateAccountComponent } from "./shoping/create-account/create-account.component";
import { LoginComponent } from "./shoping/login/login.component";
import { ProductComponent } from "./shoping/product/product.component";
import { ShopingComponent } from "./shoping/shoping.component";
import { TodoStudentComponent } from "./todo-student/todo-student.component";
import { TodoComponent } from "./todo/todo.component";

const routes: Routes = [
  { path: "todoStudent", component: TodoStudentComponent },
  { path: "todo", component: TodoComponent },
  { path: "shopping", component: ShopingComponent,children:[
    // { path: "cart", component: CartComponent },
    // { path: "create-account", component: CreateAccountComponent },
    // { path: "login", component: LoginComponent },
    // { path: "product", component: ProductComponent }
  ]},
  { path: "login", component: LoginComponent },
  { path: "createAccount", component: CreateAccountComponent },
  {path:"product",component:ProductComponent},
  {path:"cart", component:CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
