import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-top-bar',
  standalone: true,
    imports: [CommonModule, RouterLink],
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  public authenticated = false;

  constructor(private router: Router) {
  }

  goToHome() {
    this.router.navigate(['/']);
  }
}
