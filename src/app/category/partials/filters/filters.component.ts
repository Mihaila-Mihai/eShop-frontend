import {Component, Input} from "@angular/core";
import {FilterGroup, FilterType} from "../../content/model";
import {CommonModule} from "@angular/common";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSliderModule} from "@angular/material/slider";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'app-filters',
  templateUrl: "./filters.component.html",
  styleUrls: ["./filters.component.scss"],
  standalone: true,
  imports: [CommonModule, MatExpansionModule, MatCheckboxModule, MatSliderModule, MatFormFieldModule, MatInputModule]
})
export class FiltersComponent {
  @Input() public filterGroups: FilterGroup[];
  public filterTypes = FilterType;
}
