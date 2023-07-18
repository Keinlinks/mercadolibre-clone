import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayBannerComponent } from './pay-banner.component';

describe('PayBannerComponent', () => {
  let component: PayBannerComponent;
  let fixture: ComponentFixture<PayBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
