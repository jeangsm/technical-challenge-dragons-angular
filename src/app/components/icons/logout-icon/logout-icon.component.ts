import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'icon-logout',
  templateUrl: './logout-icon.component.html',
  styleUrls: ['./logout-icon.component.scss']
})
export class LogoutIconComponent implements OnInit {
  @Input() size = '17';

  constructor() { }

  ngOnInit(): void {
  }

}
