import { State } from './../../../../shared/models/types/models';
import { BlogService } from './../../../../shared/services/blog.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  actionButton: string;
  actionTitle: string;
  state: State;
  id: string;

  constructor(
    public formBuilder: FormBuilder,
    private blogService: BlogService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initView();
    this.initForm();
  }

  initView() {
    this.state = this.activatedRoute.snapshot.data.state;
    this.actionButton = this.state === 'create' ? 'Create' : 'Edit';
    this.actionTitle = this.state === 'create' ? 'Create' : 'Edit';
    this.id = this.activatedRoute.snapshot.params.id;
  }
  
  initForm(): void {
    this.form = this.formBuilder.group({
      title: this.formBuilder.control(null, [Validators.required]),
      date: this.formBuilder.control(null, [Validators.required]),
      img: this.formBuilder.control(null, [Validators.required]),
      subContent: this.formBuilder.control(null, [Validators.required]),
      mainContent: this.formBuilder.control(null, [Validators.required]),
    });

    if (this.state === 'edit') {
      const getPost = this.blogService.getPost(this.id);
      this.form.patchValue(getPost);
    }
  }

  submit() {
    if (this.state === 'create') {
      this.blogService.addMember(this.form.value);
    } else if (this.state === 'edit') {
      this.blogService.editMember(this.id, this.form.value);
    }
    this.router.navigate(['/blog']);
  }
}
