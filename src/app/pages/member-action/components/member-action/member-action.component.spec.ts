import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberActionComponent } from './member-action.component';

describe('MemberActionComponent', () => {
  let component: MemberActionComponent;
  let fixture: ComponentFixture<MemberActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
