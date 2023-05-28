import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  imports: [
    RouterLink
  ],
  standalone: true
})
export class HomepageComponent {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToOtherPage(): void {
    this.router.navigate(['/products']);
  }

}
