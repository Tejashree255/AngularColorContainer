import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tradecontainer2Component } from './tradecontainer2.component';

describe('Tradecontainer2Component', () => {
  let component: Tradecontainer2Component;
  let fixture: ComponentFixture<Tradecontainer2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tradecontainer2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tradecontainer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
