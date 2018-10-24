import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwimpCardComponent } from './twimp-card.component';

describe('TwimpCardComponent', () => {
  let component: TwimpCardComponent;
  let fixture: ComponentFixture<TwimpCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwimpCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwimpCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
