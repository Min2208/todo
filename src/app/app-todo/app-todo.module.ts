import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoFormComponent } from './todo-form/todo-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { TodoListComponent } from './todo-list/todo-list.component';



@NgModule({
    declarations: [
        TodoFormComponent,
        TodoListComponent
    ],
  exports: [
    TodoFormComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers:[]
})
export class AppTodoModule { }