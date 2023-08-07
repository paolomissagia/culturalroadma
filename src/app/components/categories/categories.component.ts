import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  @Input() category: string = '';
  @Output() categoryChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(private viewportScroller: ViewportScroller) {}

  handleCategory(event: any): void {
    this.category = event;
    this.categoryChange.emit(this.category);
    // Scroll to the next section
    setTimeout(() => {
      this.viewportScroller.scrollToAnchor('levels-component');
    }, 500);
  }
}
