import { GlobalErrorHandler } from "@/app/global-error-handler";
import { AppTitleStrategy } from "@/app/service/app-title-strategy";
import { provideImageKitLoader } from "@angular/common";
import {
  ApplicationConfig,
  ErrorHandler,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from "@angular/core";
import {
  provideClientHydration,
  withEventReplay,
} from "@angular/platform-browser";
import { provideRouter, TitleStrategy } from "@angular/router";
import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
    {
      provide: TitleStrategy,
      useClass: AppTitleStrategy,
    },
    provideImageKitLoader("https://ik.imagekit.io/jgerard/gfe-blog-card"),
  ],
};
