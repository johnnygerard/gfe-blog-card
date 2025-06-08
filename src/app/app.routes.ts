import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    loadComponent: async () => (await import("@/app/page/home/home")).Home,
    title: "Home",
  },
  {
    path: "**",
    loadComponent: async () =>
      (await import("@/app/page/not-found/not-found")).NotFound,
    title: "Page Not Found",
  },
];
