import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatRadioChange} from '@angular/material';
import {CharService} from '../shared/char.service';
import {Reminders} from '../shared/reminders';
import {COMMENTS} from '../shared/comments';
import {OPTIONS_NAMES} from '../shared/optionsNames';
import {OPTIONS} from '../shared/options';
import {SettingsService} from '../shared/settings.service';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-char',
  templateUrl: './char.component.html',
  styleUrls: ['./char.component.scss']
})
export class CharComponent implements OnInit {
  public optionsNames: string[];
  public options: object;

  public currentOption: string;
  public currentOptions: object;
  public currentTheme: string;

  public isReminder: boolean;
  public isComment: boolean;

  public reminders: object;
  public comments: object;

  public currentReminder: string;
  public currentComments: string[];

  public radioChangesCounts: object;

  public faArrowLeft: any;
  public faArrowRight: any;

  constructor(
    private charService: CharService,
    private settingsService: SettingsService,
    private router: Router
  ) {
  }

  public ngOnInit(): void {
    this.optionsNames = OPTIONS_NAMES;
    this.options = OPTIONS;

    this.currentOption = this.charService.currentOption = this.optionsNames[0];
    this.currentOptions = this.charService.currentOptions = {
      [this.optionsNames[0]]: this.options[this.charService.currentOption][0]
    };
    this.currentTheme = this.settingsService.currentTheme = 'light';

    this.isReminder = true;
    this.isComment = false;

    this.reminders = new Reminders();
    this.comments = COMMENTS;

    this.currentReminder = this.reminders[this.currentOption];
    this.currentComments = [];

    this.radioChangesCounts = {
      [this.options[this.currentOption][0]]: 1
    };

    this.faArrowLeft = faArrowLeft;
    this.faArrowRight = faArrowRight;
  }

  private onRadioValueChanges(event: MatRadioChange): void {
    this.currentOptions[this.currentOption] = this.charService.currentOptions[this.currentOption] = event.value;
    this.isComment = false;
    if (!this.radioChangesCounts[event.value]) {
      this.radioChangesCounts[event.value] = 1;
    } else {
      this.radioChangesCounts[event.value]++;
      if (this.radioChangesCounts[event.value] === 2) {
        let currentOptionsInString = '';
        for (const key in this.currentOptions) {
          currentOptionsInString += this.currentOptions[key];
        }
        this.currentComments = this.comments[this.currentOption][currentOptionsInString];
        if (this.currentComments) {
          this.isReminder = false;
          this.isComment = true;
        }
      }
    }
  }

  private goToNextOption(): void {
    this.isComment = false;
    const nextOption = this.getNextOption();
    if (nextOption === 'settings') {
      this.currentOption = this.charService.currentOption = nextOption;
      this.router.navigate(['/settings']);
    } else {
      this.currentOption = this.charService.currentOption = nextOption;
      this.currentOptions[this.currentOption] = this.charService.currentOptions[this.currentOption] = this.options[this.charService.currentOption][0];
      this.currentReminder = this.reminders[this.currentOption];
      this.radioChangesCounts[this.currentOptions[this.currentOption]] = 1;
      this.isReminder = true;
    }
  }

  private getNextOption(): string {
    let isFindedCurrentOption = false;
    for (const key in this.options) {
      if (isFindedCurrentOption) {
        return key;
      }
      if (key === this.currentOption) {
        isFindedCurrentOption = true;
      }
    }
    return 'settings';
  }

  private goToPrevOption(): void {
    const prevOption = this.getPrevOption();
    if (prevOption !== '') {
      this.currentOptions[this.currentOption] = '';
      this.currentOption = prevOption;
      this.isReminder = false;
    }
  }

  private getPrevOption(): string {
    const reverseOptions = this.reverseObject(this.options);
    let isFinded = false;
    for (const key in reverseOptions) {
      if (isFinded) {
        return key;
      }
      if (key === this.currentOption) {
        isFinded = true;
      }
    }
    return '';
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

  private hideComment(): void {
    this.isComment = false;
  }
}
