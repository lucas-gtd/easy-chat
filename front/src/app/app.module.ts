import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './comp/sign-up/sign-up.component';
import { SignInComponent } from './comp/sign-in/sign-in.component';
import { ConvoComponent } from './comp/convo/convo.component';
import { ChatComponent } from './comp/chat/chat.component';

@NgModule({
  declarations: [AppComponent, SignUpComponent, SignInComponent, ConvoComponent, ChatComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
