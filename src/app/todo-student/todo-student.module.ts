import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoStudentRoutingModule } from './todo-student-routing.module';
import { MatModule } from '../appModules/mat.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TodoStudentRoutingModule,
    MatModule
  ]
})
export class TodoStudentModule { }
