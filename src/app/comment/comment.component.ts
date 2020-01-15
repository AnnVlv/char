import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  @Input() comment: string;
  @Output() onHideComment = new EventEmitter<any>();

  constructor() { }

  private hideComment(): void {
    this.onHideComment.emit();
  }
}
