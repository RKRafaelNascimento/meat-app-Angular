import { NgModule } from "@angular/core";
import { AboutComponent } from "./about.component";
import { categoriesRouting } from "./abount.routing";


@NgModule({
  declarations: [AboutComponent],
  imports:[categoriesRouting]
})
export class AboutModule {}
