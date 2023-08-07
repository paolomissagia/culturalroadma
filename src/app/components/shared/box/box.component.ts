import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css'],
})
export class BoxComponent {
  @Input() boxTitle: any;
  @Input() boxText: any;
  @Input() boxType: any;

  constructor() {}

  ngOnInit(): void {}
}
