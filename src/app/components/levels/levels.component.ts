import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.css'],
})
export class LevelsComponent {
  @Input() level: string = '';
  @Output() levelChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() category: string = '';

  constructor() {}

  handleLevel(event: any) {
    this.level = event;
    this.levelChange.emit(this.level);
  }
}
