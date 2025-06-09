import { Link } from "@/app/component/link";
import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-not-found",
  imports: [Link],
  templateUrl: "./not-found.ng.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFound {}


