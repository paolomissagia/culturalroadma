import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.css'],
})
export class LevelsComponent {
  @Input() level: string = '';
  @Output() levelChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() category: string = '';

  constructor(private viewportScroller: ViewportScroller) {}

  handleLevel(event: any) {
    this.level = event;
    this.levelChange.emit(this.level);
    // Scroll to the next section
    setTimeout(() => {
      this.viewportScroller.scrollToAnchor('guide-component');
    }, 500);
  }
}
