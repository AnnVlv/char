import {Component, OnInit} from '@angular/core';
import {Reminders} from '../shared/reminders';
import {CharService} from '../shared/char.service';
import {OPTIONS_DEFAULT} from '../shared/optionsDefault';
import {OPTIONS_NAMES} from '../shared/optionsNames';
import {MatRadioChange} from '@angular/material';
import {SettingsService} from '../shared/settings.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  public currentColor: string;

  public optionsNames: string[];

  public currentOption: string;
  public currentOptions: object;

  public reminders: Reminders;
  public currentReminder: string;
  public isReminder: boolean;

  constructor(
    private settingsService: SettingsService,
    private charService: CharService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.currentColor = 'fff';

    if (!this.charService.currentOption) {
      this.charService.currentOption = 'settings';
      this.charService.currentOptions = OPTIONS_DEFAULT;
    }

    this.optionsNames = OPTIONS_NAMES;
    this.currentOption = this.charService.currentOption;
    this.currentOptions = this.charService.currentOptions;

    this.reminders = new Reminders();
    this.currentReminder = this.reminders.settings[0] + this.getHeroType() + this.reminders.settings[1];
    this.isReminder = true;
  }

  private getHeroType(): string {
    const reverseOptions = this.reverseObject(this.currentOptions);
    let heroType = '';
    for (const key in reverseOptions) {
      heroType += reverseOptions[key];
      heroType += ' ';
    }
    return heroType.trim();
  }

  private reverseObject(object): object {
    const newObject = {};
    const keys = [];
    for (const key in object) {
      keys.push(key);
    }
    for (let i = keys.length - 1; i >= 0; i--) {
      const value = object[keys[i]];
      newObject[keys[i]] = value;
    }
    return newObject;
  }

  private hideReminder(): void {
    this.isReminder = false;
  }

  private changeTheme(event: MatRadioChange): void {
    this.isReminder = false;
    this.settingsService.currentTheme = event.value;
  }

  private changeBackgroundColor(event): void {
    this.settingsService.currentBackgroundColor = event;
  }

  private saveSettings(): void {
    this.router.navigate(['/end']);
  }
}
