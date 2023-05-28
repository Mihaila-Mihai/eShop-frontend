import {Component, Input, OnInit} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Detail} from "../../content/model";

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  @Input() public details: Detail[] | string;
  public detailsArray: Detail[];
  public detailsString: string;

  ngOnInit() {
    if (typeof this.details === 'string') {
      this.detailsString = this.details;
    } else {
      this.detailsArray = this.details;
    }
  }
}
