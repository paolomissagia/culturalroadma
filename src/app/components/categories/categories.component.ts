import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  @Input() category: string = '';
  @Output() categoryChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  handleCategory(event: any): void {
    this.category = event;
    this.categoryChange.emit(this.category);
  }
}
