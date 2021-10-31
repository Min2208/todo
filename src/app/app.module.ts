import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppTodoModule} from "./app-todo/app-todo.module";
import {TodoServiceService} from "./todo-service.service";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AppTodoModule
    ],
  providers: [TodoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
