import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTwimpsComponent } from './my-twimps.component';

describe('MyTwimpsComponent', () => {
  let component: MyTwimpsComponent;
  let fixture: ComponentFixture<MyTwimpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTwimpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTwimpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
