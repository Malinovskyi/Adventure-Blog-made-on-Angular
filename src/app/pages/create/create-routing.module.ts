import { State } from './../../shared/models/types/models';
import { AuthGuard } from './../../shared/services/auth.guard';
import { CreateComponent } from './components/create/create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'new',
    component: CreateComponent,
    canActivate: [AuthGuard],
    data: {
      state: State.Create,
    },
  },
  {
    path: ':id',
    component: CreateComponent,
    canActivate: [AuthGuard],
    data: {
      state: State.Edit,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateRoutingModule {}
