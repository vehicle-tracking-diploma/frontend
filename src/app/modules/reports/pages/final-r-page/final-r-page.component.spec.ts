import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalRPageComponent } from './final-r-page.component';

describe('FinalRPageComponent', () => {
  let component: FinalRPageComponent;
  let fixture: ComponentFixture<FinalRPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalRPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalRPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
