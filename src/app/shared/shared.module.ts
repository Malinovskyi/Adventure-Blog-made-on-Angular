import { AuthService } from './services/auth.service';
import { BlogService } from './services/blog.service';
import { MemberService } from './services/member.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { ComponentsModule } from './components/components.module';
import { DirectivesModule } from './directives/directives.module';
import { ServicesModule } from './services/services.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    ServicesModule,
    DirectivesModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    ComponentsModule,
    ServicesModule,
    DirectivesModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [MemberService, BlogService, AuthService],
    };
  }
}
