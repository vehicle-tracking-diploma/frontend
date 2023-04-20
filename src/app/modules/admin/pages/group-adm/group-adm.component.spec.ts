import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupAdmComponent } from './group-adm.component';

describe('GroupAdmComponent', () => {
  let component: GroupAdmComponent;
  let fixture: ComponentFixture<GroupAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupAdmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
