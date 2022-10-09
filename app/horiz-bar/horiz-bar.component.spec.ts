import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizBarComponent } from './horiz-bar.component';

describe('HorizBarComponent', () => {
  let component: HorizBarComponent;
  let fixture: ComponentFixture<HorizBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
