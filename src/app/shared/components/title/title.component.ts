import {Component, ContentChild, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'custom-title',
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent {
  @Input() title: string = '';

  constructor() {}

  toUpper(){
    return this.title.toUpperCase();
  }

  toLover(){
    return this.title.toLowerCase();
  }
}
