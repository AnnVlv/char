import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NUMBERS} from '../shared/numbers';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit {
  private numbers: object;
  @Output() onHideReminder = new EventEmitter<any>();
  @Input() reminder: string;
  @Input() remindersForSetting?: string[];
  @Input() option: string;

  public ngOnInit(): void {
    this.numbers = NUMBERS;
  }

  private hideReminder(): void {
    this.onHideReminder.emit();
  }
}
