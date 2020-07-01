import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MessageComponent } from './components/message/message.component';
import { MessageDetailComponent } from './components/message-detail/message-detail.component';
import { AddMessageComponent } from './components/add-message/add-message.component';
import { EditMessageComponent } from './components/edit-message/edit-message.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'message', component: HomeComponent},
  {path: 'message/add', component: AddMessageComponent},
  {path: 'message/:id', component: MessageDetailComponent},
  {path: 'edit-message/:id', component: EditMessageComponent},


  {path: '**', component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
