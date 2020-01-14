import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit {
  private numbers: object;
  private comments: object;
  @Input() currentOption: string;
  @Output() onIsReminderChange = new EventEmitter();

  constructor() { }

  public ngOnInit(): void {
    this.numbers = {
      race: 'first',
      class: 'second'
    };
    this.comments = {
      race: 'Everyone is crazy about it now...',
      class: 'Second but not least'
    };
  }

  private hideReminder(): void {
    this.onIsReminderChange.emit();
  }
}
