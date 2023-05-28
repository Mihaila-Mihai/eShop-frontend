import {Component, Input, OnInit} from "@angular/core";
import {FilterGroup, FilterType} from "../../content/model";
import {CommonModule} from "@angular/common";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatCheckboxChange, MatCheckboxModule} from "@angular/material/checkbox";
import {MatSliderModule} from "@angular/material/slider";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ActivatedRoute, Router} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-filters',
  templateUrl: "./filters.component.html",
  styleUrls: ["./filters.component.scss"],
  standalone: true,
  imports: [CommonModule, MatExpansionModule, MatCheckboxModule, MatSliderModule, MatFormFieldModule, MatInputModule]
})
export class FiltersComponent implements OnInit {
  @Input() public filterGroups: FilterGroup[];
  public filterTypes = FilterType;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {

  }

  public filters: string[] = [];

  filtersChanged($event: MatCheckboxChange) {
    if ($event.checked) {
      this.filters.push($event.source.ariaLabelledby || '')

    } else {
      let index = this.filters.indexOf($event.source.ariaLabelledby || '')
      if (index > -1) {
        this.filters.splice(index, 1);
      }
    }
    this.router.navigate([], {
      queryParams: {
        filter: this.filters.join(',')
      },
      queryParamsHandling: "merge"
    })


  }
}
