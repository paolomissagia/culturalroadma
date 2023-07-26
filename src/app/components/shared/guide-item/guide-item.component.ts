import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-guide-item',
  templateUrl: './guide-item.component.html',
  styleUrls: ['./guide-item.component.css'],
})
export class GuideItemComponent {
  @Input() itemTitle: string = '';
  @Input() itemAuthor: string = '';
  @Input() itemIcon: string = '';
  @Input() itemLast: boolean = false;

  constructor() {}

  getIconName(): string {
    return `${this.itemIcon} text-2xl`;
  }
}
