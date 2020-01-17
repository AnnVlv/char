import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {MaterialModule} from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ColorPickerModule } from 'ngx-color-picker';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CharComponent } from './char/char.component';
import { ReminderComponent } from './reminder/reminder.component';
import { CommentComponent } from './comment/comment.component';
import { SettingsComponent } from './settings/settings.component';
import { EndComponent } from './end/end.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharComponent,
    ReminderComponent,
    CommentComponent,
    SettingsComponent,
    EndComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FontAwesomeModule,
    ColorPickerModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
