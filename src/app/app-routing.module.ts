import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './container/landingpage/landingpage.component';
import { TimelineComponent } from './container/timeline/timeline.component';
import { ScaffoldDefaultComponent } from './default/scaffold-default/scaffold-default.component';

const routes: Routes = [
  {path:'', redirectTo:'/landingpage', pathMatch: 'full'},
  {path:'landingpage', component: LandingpageComponent},
  // {path:'default', component: ScaffoldDefaultComponent},
  {path:'timeline', component: TimelineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
