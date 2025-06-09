import { ArrowRightLine } from "@/app/component/svg/arrow-right-line";
import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-link",
  imports: [ArrowRightLine, RouterLink],
  template: `
    <a
      class="flex w-fit items-center gap-1.5 rounded-sm font-medium text-indigo-700 outline-4 outline-transparent transition-colors hover:text-indigo-800 focus-visible:text-indigo-800 focus-visible:outline-[rgba(68,76,231,0.12)]"
      [routerLink]="url()"
    >
      <span class="px-0.5">
        <ng-content />
      </span>
      <app-arrow-right-line class="size-5" />
    </a>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Link {
  url = input.required<string>();
}
