import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './comp/chat/chat.component';
import { ConvoComponent } from './comp/convo/convo.component';
import { SignInComponent } from './comp/sign-in/sign-in.component';
import { SignUpComponent } from './comp/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: SignUpComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'convos', component: ConvoComponent },
  { path: 'chat', component: ChatComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
