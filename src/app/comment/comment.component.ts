import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comments: string[];
  @Output() onHideComment = new EventEmitter<any>();
  public faTrash;

  constructor() { }

  public ngOnInit(): void {
    this.faTrash = faTrash;
  }

  private hideComment(): void {
    this.onHideComment.emit();
  }
}
