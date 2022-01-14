import { CreateComponent } from './components/create/create.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CreateComponent],
  imports: [CommonModule, CreateRoutingModule, SharedModule],
})
export class CreateModule {}
