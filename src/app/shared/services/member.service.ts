import { people } from './../../mocks/people.mock';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Member } from '../models/types/members';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  people = people;
  people$ = new BehaviorSubject<any[]>(people);

  constructor() {}

  addMember(member: Member): void {
    this.people$.next([
      ...this.people$.getValue(),
      { ...member, id: this.getId() },
    ]);
  }

  editMember(id: string, member: any) {
    const index = this.people$.getValue().findIndex((user) => user.id === id);
    const members = [...this.people$.getValue()];
    members[index] = { ...members[index], ...member };
    this.people$.next(members);
  }

  getId(): string {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  getMember(id: string) {
    return this.people$.getValue().find((user) => user.id === id);
  }

  //getImage(): string {
  //  let x = String(Math.floor(Math.random() * 100));
  //  return 'https://randomuser.me/api/portraits/men/' + x + '.jpg';
  //}
}
