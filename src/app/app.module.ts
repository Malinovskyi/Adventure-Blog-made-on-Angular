import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './core/app-routing.module';
import { AppComponent } from './app.component';
import { MemberActionComponent } from './pages/member-action/components/member-action/member-action.component';

@NgModule({
  declarations: [AppComponent, MemberActionComponent],
  imports: [SharedModule, AppRoutingModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
