import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-char',
  templateUrl: './char.component.html',
  styleUrls: ['./char.component.scss']
})
export class CharComponent implements OnInit {
  public optionsNames: string[];
  public currentOption: string;
  public options: object;
  public currentOptions: object;
  public isReminder: boolean;
  public isComment: boolean;
  public comment: string;
  public radioChanged: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.currentOption = params.option;
    });

    this.optionsNames = ['race', 'class'];
    this.options = {
      race: ['human', 'elf', 'dwarf'],
      class: ['warrior', 'dude with bow', 'mage'],
    };
    this.currentOptions = {
      race: 'human',
      class: '',
    };
    this.isReminder = true;
    this.isComment = false;
    this.comment = '';
    this.radioChanged = 0;
  }

  private goToNextOption(): void {
    const nextOption = this.getNextOption();
    if (nextOption !== '') {
      this.currentOption = nextOption;
      this.currentOptions[this.currentOption] = this.options[this.currentOption][0];
      this.isReminder = true;
      this.router.navigate(['/char', this.currentOption]);
    }
  }

  private goToPrevOption(): void {
    const prevOption = this.getPrevOption();
    if (prevOption !== '') {
      this.currentOptions[this.currentOption] = '';
      this.currentOption = prevOption;
      this.router.navigate(['/char', this.currentOption]);
    }
  }

  private getNextOption(): string {
    let isFinded = false;
    for (const key in this.options) {
      if (isFinded) {
        return key;
      }
      if (key === this.currentOption) {
        isFinded = true;
      }
    }
    return '';
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

  private toggleReminder(): void {
    this.isReminder = !this.isReminder;
  }

  private toggleComment(): void {
    this.isComment = !this.isComment;
  }

  private increaseRadioChangedCount(): void {
    this.radioChanged++;
    if (this.radioChanged === 3) {
      this.isComment = true;
    }
  }
}

