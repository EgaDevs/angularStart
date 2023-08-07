import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsComponent } from './mars.component';

describe('MarsComponent', () => {
  let component: MarsComponent;
  let fixture: ComponentFixture<MarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarsComponent]
    });
    fixture = TestBed.createComponent(MarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
