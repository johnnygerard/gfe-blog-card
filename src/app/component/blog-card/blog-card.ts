import { NgOptimizedImage } from "@angular/common";
import { ChangeDetectionStrategy, Component, input } from "@angular/core";

const host = {
  class: "block w-full max-w-85 rounded-lg overflow-clip",
};

@Component({
  selector: "app-blog-card",
  imports: [NgOptimizedImage],
  templateUrl: "./blog-card.ng.html",
  host,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogCard {
  imageAlt = input.required<string>();
  imageFilename = input.required<string>();
}
