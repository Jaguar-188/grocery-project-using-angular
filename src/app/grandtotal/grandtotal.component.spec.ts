import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandtotalComponent } from './grandtotal.component';

describe('GrandtotalComponent', () => {
  let component: GrandtotalComponent;
  let fixture: ComponentFixture<GrandtotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandtotalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandtotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
