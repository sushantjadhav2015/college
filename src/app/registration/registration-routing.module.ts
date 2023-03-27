import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormDataComponent } from './form-data/form-data.component';
import { RegistrationComponent } from './registration.component';


const routes: Routes = [
{path:"registration", component:RegistrationComponent,
children:[
  {path:"formData", component:FormDataComponent}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
