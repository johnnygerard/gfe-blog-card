import { BlogCard } from "@/app/component/blog-card/blog-card";
import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-home",
  imports: [BlogCard],
  templateUrl: "./home.ng.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
