import { AuthService } from './../../../../shared/services/auth.service';
import { MemberService } from './../../../../shared/services/member.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(
    public memberService: MemberService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {}

  removePost(id: string) {
    const user = this.memberService.people$
      .getValue()
      .filter((i) => i.id !== id);
    this.memberService.people$.next(user);
  }
}
