import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScaffoldDefaultComponent } from './default/scaffold-default/scaffold-default.component';

const routes: Routes = [
  {path:'', redirectTo:'/default', pathMatch: 'full'},
  {path:'default', component: ScaffoldDefaultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
