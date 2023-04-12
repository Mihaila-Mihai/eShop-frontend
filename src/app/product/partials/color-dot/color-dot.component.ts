import {Component, Input} from "@angular/core";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-color-dot',
  templateUrl: './color-dot.component.html',
  styleUrls: ['./color-dot.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ColorDotComponent {
  @Input()
  public color?: string;

  @Input()
  public selected: boolean = false;

  @Input()
  public borderColor: string = 'lightgray';
}
