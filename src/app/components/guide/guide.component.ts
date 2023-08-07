import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GuidesService } from 'src/app/services/guides.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css'],
})
export class GuideComponent {
  @Input() category: string = '';
  @Input() level: string = '';
  @Input() final: boolean = false;
  @Output() finalChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  guideData: any;

  constructor(
    private guideService: GuidesService,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    this.getGuideData();
  }

  getGuideData(): void {
    this.guideService.getGuides(this.category, this.level).subscribe((data) => {
      this.guideData = data;
    });
  }

  handleGuide(): void {
    this.final = true;
    this.finalChange.emit(this.final);
    // Scroll to the next section
    setTimeout(() => {
      this.viewportScroller.scrollToAnchor('final-component');
    }, 500);
  }
}
