import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprendeComponent } from './emprende.component';

describe('EmprendeComponent', () => {
  let component: EmprendeComponent;
  let fixture: ComponentFixture<EmprendeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmprendeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmprendeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
