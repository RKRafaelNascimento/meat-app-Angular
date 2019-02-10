import { AboutComponent } from "./about.component";
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";


const ROUTES_ABOUT: Routes = [
  {path: '', component: AboutComponent}
]

export const categoriesRouting: ModuleWithProviders = RouterModule.forChild(ROUTES_ABOUT);
