import {Component, OnInit} from '@angular/core';
import {RegisterService} from "../service/register.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true
})
export class RegisterComponent implements OnInit {
  constructor(private registerService: RegisterService) {
  }

  ngOnInit(): void {
    // this.registerService.register();
  }
}
