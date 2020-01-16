import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public currentTheme: string;
  public currentBackgroundColor: string;

  constructor() {
    this.init();
  }

  private init(): void {
    this.currentTheme = 'light';
    this.currentBackgroundColor = 'fff';
  }
}
