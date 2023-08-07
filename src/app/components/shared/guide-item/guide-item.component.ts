import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-guide-item',
  templateUrl: './guide-item.component.html',
  styleUrls: ['./guide-item.component.css'],
})
export class GuideItemComponent {
  @Input() itemTitle: any;
  @Input() itemAuthor: any;
  @Input() itemNumber: any;
  @Input() itemLast: boolean = false;

  constructor() {}

  getIconName(): string {
    return `fa-solid fa-${this.itemNumber} text-2xl`;
  }
}
