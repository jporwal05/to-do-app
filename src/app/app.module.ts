import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoComponent } from './todo/todo.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';

const routes = [
  {
    path: "",
    component: TodoComponent
  },
  {
    path: "register",
    component: RegisterComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskListComponent,
    CreateTaskComponent,
    NavComponent,
    TodoComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
