import {Component, OnInit} from '@angular/core';
import {REMINDERS} from '../shared/reminders';
import {CharService} from '../shared/char.service';
import {OPTIONS_DEFAULT} from '../shared/optionsDefault';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  public currentOption: string;
  public currentOptions: object;

  public reminders: object;
  public currentReminder: string;
  public isReminder: boolean;

  constructor(private charService: CharService) { }

  public ngOnInit(): void {
    if (!this.charService.currentOption) {
      this.charService.currentOption = 'settings';
      this.charService.currentOptions = OPTIONS_DEFAULT;
    }
    this.currentOption = this.charService.currentOption;
    this.currentOptions = this.charService.currentOptions;

    this.reminders = REMINDERS;
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
}
