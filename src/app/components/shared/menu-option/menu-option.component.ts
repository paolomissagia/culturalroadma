import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu-option',
  templateUrl: './menu-option.component.html',
  styleUrls: ['./menu-option.component.css'],
})
export class MenuOptionComponent {
  @Input() optionTitle: string = '';
  @Input() optionDescription: string = '';
  @Input() optionIcon: string = '';
  @Output() optionFunction: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  getIconName(): string {
    return `${this.optionIcon} text-2xl`;
  }

  onClick(): void {
    this.optionFunction.emit(this.optionTitle);
  }
}
