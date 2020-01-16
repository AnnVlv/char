import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CharComponent} from './char/char.component';
import {SettingsComponent} from './settings/settings.component';
import {EndComponent} from './end/end.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'char', component: CharComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'end', component: EndComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
