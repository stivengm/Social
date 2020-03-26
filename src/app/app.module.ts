import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { AngularMaterial } from './Material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Typed.js
import { NgxTypedJsModule } from 'ngx-typed-js';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/user/register/register.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatOnlineComponent } from './components/user/chat/chat-online/chat-online.component';
import { SingleChatComponent } from './components/user/chat/single-chat/single-chat.component';
import { InformationComponent } from './components/user/profile/information/information.component';
import { FriendsComponent } from './components/user/profile/friends/friends.component';
import { DashboardComponent } from './components/home/dashboard/dashboard.component';
import { WritePostComponent } from './components/home/write-post/write-post.component';
import { PostComponent } from './components/home/post/post.component';
import { ProfileHomeComponent } from './components/home/profile-home/profile-home.component';
import { PublicityComponent } from './components/home/publicity/publicity.component';
import { FeedComponent } from './components/home/feed/feed.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ProfileComponent,
    HomeComponent,
    ChatOnlineComponent,
    SingleChatComponent,
    InformationComponent,
    FriendsComponent,
    DashboardComponent,
    WritePostComponent,
    PostComponent,
    ProfileHomeComponent,
    PublicityComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterial,
    FormsModule,
    ReactiveFormsModule,
    NgxTypedJsModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
