import { AuthService } from './../../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/types/authorization';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss'],
})
export class AuthorizationComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  message: string;

  constructor(
    public formBuilder: FormBuilder,
    public auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      if (params['loginAgain']) {
        this.message = 'Please,type your info';
      }
    });
    this.initForm();
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      email: this.formBuilder.control(null, [
        Validators.required,
        Validators.email,
      ]),
      password: this.formBuilder.control(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password,
    };

    this.auth.login(user).subscribe(
      () => {
        this.form.reset();
        this.router.navigate(['/']);
        this.submitted = false;
      },
      () => {
        this.submitted = false;
      }
    );
  }
}
