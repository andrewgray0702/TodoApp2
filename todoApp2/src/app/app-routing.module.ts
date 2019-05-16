import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodocompComponent } from './todocomp/todocomp.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: 'todo', component: TodocompComponent},
  {path: 'user/:username', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
