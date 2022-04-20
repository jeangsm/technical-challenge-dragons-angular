import { Component, OnInit } from '@angular/core';
import fadeAnimation from 'src/app/animations/fadeAnimation';
import fadeInAnimation from 'src/app/animations/fadeInAnimation';
import slideAnimation from 'src/app/animations/slideAnimation';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dragons',
  templateUrl: './dragons.component.html',
  styleUrls: ['./dragons.component.scss'],
  animations: [slideAnimation,fadeAnimation, fadeInAnimation]
})
export class DragonsComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  signOut(): void {
    this.authService.signOut();
  }

}
