import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { SignupComponent } from './components/signup/signup.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { AuthGuard } from './auth.guard';
import { TweetComponent } from './components/timeline/tweet/tweet.component';
import { HttpClientModule } from '@angular/common/http';
import { TweetService } from './services/tweet.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    TimelineComponent,
    TweetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard, TweetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
