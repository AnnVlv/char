import {Component, EventEmitter, Input, Output} from '@angular/core';
import {raceComments} from '../shared/raceComments';
import {classComments} from '../shared/classComments';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  @Input() comment: string;
  @Output() onIsCommentChange = new EventEmitter();

  constructor() { }

  private hideComment(): void {
    this.onIsCommentChange.emit();
  }
}
