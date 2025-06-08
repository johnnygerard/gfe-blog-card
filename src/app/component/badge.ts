import { ChangeDetectionStrategy, Component } from "@angular/core";

const host = {
  class:
    "w-fit rounded-full bg-green-50 px-2 py-0.5 text-sm text-green-700 inset-ring inset-ring-green-200",
};

@Component({
  selector: "app-badge",
  imports: [],
  template: ` <ng-content />`,
  host,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Badge {}
