import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisneySectionComponent } from './disney-section.component';

describe('DisneySectionComponent', () => {
  let component: DisneySectionComponent;
  let fixture: ComponentFixture<DisneySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisneySectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisneySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
