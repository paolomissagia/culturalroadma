import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css'],
})
export class GuideComponent {
  @Input() category: string = '';
  @Input() level: string = '';

  constructor() {}

  ngOnInit(): void {}

  handleGuide(): void {
    console.log('Guide clicked');
  }
}
