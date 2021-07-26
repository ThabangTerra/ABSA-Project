import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnChanges {
  @Input() description: string;
  @Input() price: number = 0;
  desc: string[] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.description) this.desc = this.description.split('|');
  }
}
