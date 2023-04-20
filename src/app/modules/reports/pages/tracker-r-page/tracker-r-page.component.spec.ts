import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerRPageComponent } from './tracker-r-page.component';

describe('TrackerRPageComponent', () => {
  let component: TrackerRPageComponent;
  let fixture: ComponentFixture<TrackerRPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackerRPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackerRPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
