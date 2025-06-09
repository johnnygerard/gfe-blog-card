import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-badge",
  imports: [],
  template: `
    <div
      class="w-fit rounded-full bg-green-50 px-2 py-0.5 text-sm text-green-700 inset-ring inset-ring-green-200"
    >
      <ng-content />
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Badge {}
