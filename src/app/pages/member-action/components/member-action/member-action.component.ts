import { State } from './../../../../shared/models/types/models';
import { MemberService } from './../../../../shared/services/member.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-member-action',
  templateUrl: './member-action.component.html',
  styleUrls: ['./member-action.component.scss'],
})
export class MemberActionComponent implements OnInit {
  form: FormGroup;
  state: State;
  actionButton: string;
  changeTitle: string;
  id: string;

  constructor(
    private memberService: MemberService,
    public formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initView();
    this.initForm();
  }

  initView() {
    this.state = this.activatedRoute.snapshot.data.state;
    this.actionButton = this.state === State.Create ? 'Add' : 'Edit';
    this.changeTitle = this.state === State.Create ? 'Add' : 'Edit';
    this.id = this.activatedRoute.snapshot.params.id;
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      firstName: this.formBuilder.control(null, [Validators.required]),
      position: this.formBuilder.control(null),
      role: this.formBuilder.control(null),
      age: this.formBuilder.control(null),
      image: this.formBuilder.control(null, Validators.required),
    });

    if (this.state === State.Edit) {
      const getUser = this.memberService.getMember(this.id);
      this.form.patchValue(getUser);
    }
  }

  action() {
    if (this.state === 'create') {
      this.memberService.addMember(this.form.value);
    } else if (this.state === 'edit') {
      this.memberService.editMember(
        this.activatedRoute.snapshot.params.id,
        this.form.value
      );
    }

    this.router.navigate(['/about']);
  }
}
