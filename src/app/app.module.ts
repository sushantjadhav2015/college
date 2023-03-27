import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TitleComponent } from "./title/title.component";

import { ResultComponent } from "./result/result.component";
import { MatModule } from "./appModules/mat.module";
import { PracticeComponent } from "./practice/practice.component";
import { StudentComponent } from "./student/student.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TodoStudentComponent } from "./todo-student/todo-student.component";
import { TodoStudentModule } from "./todo-student/todo-student.module";
import { HttpClientModule } from "@angular/common/http";
import { DiallogComponent } from "./diallog/diallog.component";
import { TableComponent } from "./table/table.component";
import { RegistrationComponent } from "./registration/registration.component";
import { FormDataComponent } from "./registration/form-data/form-data.component";
import { RegistrationModule } from "./registration/registration.module";
import { TodoComponent } from "./todo/todo.component";
import { WikiSearchPipe } from "./pipes/wiki-search.pipe";
import { CreateAccountComponent } from "./shoping/create-account/create-account.component";
import { LoginComponent } from "./shoping/login/login.component";
import { ShopingComponent } from "./shoping/shoping.component";
import { ProductComponent } from './shoping/product/product.component';
import { CartComponent } from './shoping/cart/cart.component';
import { ShoppingPipe } from './pipes/shopping.pipe';
import { UseraccountComponent } from './shoping/useraccount/useraccount.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    ResultComponent,
    PracticeComponent,
    StudentComponent,
    TodoStudentComponent,
    DiallogComponent,
    TableComponent,
    RegistrationComponent,
    FormDataComponent,
    TodoComponent,
    WikiSearchPipe,
    CreateAccountComponent,
    LoginComponent,
    ShopingComponent,
    ProductComponent,
    CartComponent,
    ShoppingPipe,
    UseraccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatModule,
    ReactiveFormsModule,
    TodoStudentModule,
    HttpClientModule,
    RegistrationModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
