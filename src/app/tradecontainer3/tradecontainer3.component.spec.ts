import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tradecontainer3Component } from './tradecontainer3.component';

describe('Tradecontainer3Component', () => {
  let component: Tradecontainer3Component;
  let fixture: ComponentFixture<Tradecontainer3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tradecontainer3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tradecontainer3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
