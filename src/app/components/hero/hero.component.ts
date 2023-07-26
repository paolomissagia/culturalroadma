import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  @Input() start: boolean = false;
  @Output() startChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  handleStart() {
    this.start = !this.start;
    this.startChange.emit(this.start);
  }
}
