import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoformComponent } from './shared/component/todoform/todoform.component';
import { TodolistComponent } from './shared/component/todolist/todolist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StudenttableComponent } from './shared/component/studenttable/studenttable.component';
import { StudentlistComponent } from './shared/component/studentlist/studentlist.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoformComponent,
    TodolistComponent,
    StudenttableComponent,
    StudentlistComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
