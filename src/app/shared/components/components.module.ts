import { SearchPipe } from './../pipes/search.pipe';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from './page-header/page-header/page-header.component';
import { InputComponent } from './form/input/input.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    PageHeaderComponent,
    InputComponent,
    SearchPipe,
    PostComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [PageHeaderComponent, InputComponent, SearchPipe, PostComponent],
})
export class ComponentsModule {}
