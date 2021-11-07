import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { TodoFormComponent } from './todo-form/todo-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { TodoListComponent } from './todo-list/todo-list.component';
import {RouterModule} from "@angular/router";
import { DetailComponent } from './detail/detail.component';



@NgModule({
    declarations: [
        TodoFormComponent,
        TodoListComponent,
        DetailComponent
    ],
  exports: [
    TodoFormComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers:[DatePipe]
})
export class AppTodoModule { }
