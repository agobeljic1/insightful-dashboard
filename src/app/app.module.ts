import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardPageComponent } from './ui/pages/dashboard-page/dashboard-page.component';
import { NotFoundPageComponent } from './ui/pages/not-found-page/not-found-page.component';

@NgModule({
  declarations: [AppComponent, DashboardPageComponent, NotFoundPageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
