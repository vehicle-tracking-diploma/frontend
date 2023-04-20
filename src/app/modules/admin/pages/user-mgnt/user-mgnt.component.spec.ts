import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMgntComponent } from './user-mgnt.component';

describe('UserMgntComponent', () => {
  let component: UserMgntComponent;
  let fixture: ComponentFixture<UserMgntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMgntComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMgntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
