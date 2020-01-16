import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['../home/home.component.scss']
})
export class EndComponent {

  constructor(private router: Router) { }

  goAgain() {
    this.router.navigate(['/home']);
  }
}
