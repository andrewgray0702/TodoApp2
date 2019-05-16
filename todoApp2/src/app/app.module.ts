import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodocompComponent } from './todocomp/todocomp.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { SortPipe } from './sort.pipe'

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodocompComponent,
    UserComponent,
    FilterPipe,
    SortPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
