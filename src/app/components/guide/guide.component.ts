import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GuidesService } from 'src/app/services/guides.service';

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

  constructor(private guideService: GuidesService) {}

  ngOnInit(): void {
    this.getGuideData();
  }

  getGuideData(): void {
    this.guideService.getGuides(this.category, this.level).subscribe((data) => {
      this.guideData = data;
    });
  }

  handleGuide(): void {
    this.final = !this.final;
    this.finalChange.emit(this.final);
  }
}
