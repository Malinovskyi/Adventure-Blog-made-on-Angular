import { PostComponent } from './../shared/components/post/post.component';
import { AuthorizationModule } from './../pages/authorization/authorization.module';
import { MemberActionModule } from './../pages/member-action/member-action.module';
import { BlogModule } from './../pages/blog/blog.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../pages/home-page/home-page.module').then(
        (m) => m.HomePageModule
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('../pages/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('../pages/blog/blog.module').then((m) => m.BlogModule),
  },
  {
    path: 'member',
    loadChildren: () =>
      import('../pages/member-action/member-action.module').then(
        (m) => m.MemberActionModule
      ),
  },
  {
    path: 'authorization',
    loadChildren: () =>
      import('../pages/authorization/authorization.module').then(
        (m) => m.AuthorizationModule
      ),
  },
  {
    path: 'create',
    loadChildren: () =>
      import('../pages/create/create.module').then((m) => m.CreateModule),
  },
  {
    path: 'post/:id',
    component: PostComponent,
  },
];

@NgModule({
  imports: [RouterModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
