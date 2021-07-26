import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() item: any;
  @Output() clkEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onClick(id: string): void {
    this.clkEvent.emit(id);
  }
}
