import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradecontainerComponent } from './tradecontainer.component';

describe('TradecontainerComponent', () => {
  let component: TradecontainerComponent;
  let fixture: ComponentFixture<TradecontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradecontainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradecontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
