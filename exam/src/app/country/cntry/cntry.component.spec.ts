import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CntryComponent } from './cntry.component';

describe('CntryComponent', () => {
  let component: CntryComponent;
  let fixture: ComponentFixture<CntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CntryComponent]
    });
    fixture = TestBed.createComponent(CntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
