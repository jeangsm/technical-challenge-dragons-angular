import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Dragon } from 'src/app/models';

@Component({
  selector: 'app-dragon-card',
  templateUrl: './dragon-card.component.html',
  styleUrls: ['./dragon-card.component.scss']
})
export class DragonCardComponent implements OnInit {
  @Input() dragon: Dragon;
  @Output() remove = new EventEmitter();
  @Output() update = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onRemove(): void {
    this.remove.emit();
  }

  onUpdate(): void {
    this.update.emit();
  }

}
