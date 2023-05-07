import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule, MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {FACEBOOK, INSTAGRAM, TWITTER, YOUTUBE} from "./content/utils";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(private domSanitizer: DomSanitizer, private matIconRegistry: MatIconRegistry) {
    this.matIconRegistry.addSvgIconLiteral("facebook", this.domSanitizer.bypassSecurityTrustHtml(FACEBOOK));
    this.matIconRegistry.addSvgIconLiteral("instagram", this.domSanitizer.bypassSecurityTrustHtml(INSTAGRAM));
    this.matIconRegistry.addSvgIconLiteral("youtube", this.domSanitizer.bypassSecurityTrustHtml(YOUTUBE));
    this.matIconRegistry.addSvgIconLiteral("twitter", this.domSanitizer.bypassSecurityTrustHtml(TWITTER));
  }
}
