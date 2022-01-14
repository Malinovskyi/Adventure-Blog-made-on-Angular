import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberActionRoutingModule } from './member-action-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, MemberActionRoutingModule, SharedModule],
})
export class MemberActionModule {}
