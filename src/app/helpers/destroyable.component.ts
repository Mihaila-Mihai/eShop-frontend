import {Component, OnDestroy} from "@angular/core";
import {Subject} from "rxjs";
import {CommonModule} from "@angular/common";

@Component({
  template: '',
  standalone: true,
  imports: [CommonModule]
})
export class DestroyableComponent implements OnDestroy {
  protected destroyed$: Subject<boolean> = new Subject<boolean>();

  public ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
