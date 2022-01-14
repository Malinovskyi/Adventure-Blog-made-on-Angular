import { State } from './../../shared/models/types/models';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberActionComponent } from './components/member-action/member-action.component';
import { AuthGuard } from 'src/app/shared/services/auth.guard';

const routes: Routes = [
  {
    path: 'new',
    component: MemberActionComponent,
    data: {
      state: State.Create,
    },
    canActivate: [AuthGuard],
  },
  {
    path: ':id',
    component: MemberActionComponent,
    data: {
      state: State.Edit,
    },
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberActionRoutingModule {}
