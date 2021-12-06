import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScaffoldDefaultComponent } from './default/scaffold-default/scaffold-default.component';
import { TimelineComponent } from './container/timeline/timeline.component';
import { HeaderComponent } from './main-header/header/header.component';
import { LandingpageComponent } from './container/landingpage/landingpage.component';

@NgModule({
  declarations: [
    AppComponent,
    ScaffoldDefaultComponent,
    TimelineComponent,
    HeaderComponent,
    LandingpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
