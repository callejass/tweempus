import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwimpListComponent } from './twimp-list.component';

describe('TwimpListComponent', () => {
  let component: TwimpListComponent;
  let fixture: ComponentFixture<TwimpListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwimpListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwimpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
