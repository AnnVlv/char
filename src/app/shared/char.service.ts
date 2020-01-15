import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharService {
  public currentOption: string;
  public currentOptions: object;

  constructor() { }
}
