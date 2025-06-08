import { Badge } from "@/app/component/badge";
import { Link } from "@/app/component/link";
import { NgOptimizedImage } from "@angular/common";
import { ChangeDetectionStrategy, Component, input } from "@angular/core";

@Component({
  selector: "app-blog-card",
  imports: [NgOptimizedImage, Badge, Link],
  templateUrl: "./blog-card.ng.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogCard {
  postUrl = input.required<string>();
  badge = input.required<string>();
  title = input.required<string>();
  description = input.required<string>();
  imageAlt = input.required<string>();
  imageFilename = input.required<string>();
}
