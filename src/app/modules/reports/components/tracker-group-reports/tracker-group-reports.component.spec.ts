import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerGroupReportsComponent } from './tracker-group-reports.component';

describe('TrackerGroupReportsComponent', () => {
  let component: TrackerGroupReportsComponent;
  let fixture: ComponentFixture<TrackerGroupReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackerGroupReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackerGroupReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
