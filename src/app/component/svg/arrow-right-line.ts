import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-arrow-right-line",
  imports: [],
  template: `
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path
        d="M13.4763 9.16658L9.00625 4.69657L10.1848 3.51807L16.6666 9.99992L10.1848 16.4817L9.00625 15.3032L13.4763 10.8332H3.33325V9.16658H13.4763Z"
      />
    </svg>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArrowRightLine {}
