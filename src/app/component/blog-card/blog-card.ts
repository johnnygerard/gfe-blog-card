import { Badge } from "@/app/component/badge";
import { Link } from "@/app/component/link";
import { NgOptimizedImage } from "@angular/common";
import { ChangeDetectionStrategy, Component, input } from "@angular/core";

const host = {
  class:
    "block bg-white w-full max-w-85 rounded-lg overflow-clip shadow-[0_1px_3px_rgba(0,0,0,0.10),0_1px_2px_rgba(0,0,0,0.06)]",
};

@Component({
  selector: "app-blog-card",
  imports: [NgOptimizedImage, Badge, Link],
  templateUrl: "./blog-card.ng.html",
  host,
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
