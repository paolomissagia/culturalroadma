import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  @Input() start: boolean = false;
  @Output() startChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private viewportScroller: ViewportScroller) {}

  handleStart() {
    this.start = true;
    this.startChange.emit(this.start);
    // Scroll to the next section
    setTimeout(() => {
      this.viewportScroller.scrollToAnchor('categories-component');
    }, 500);
  }
}
