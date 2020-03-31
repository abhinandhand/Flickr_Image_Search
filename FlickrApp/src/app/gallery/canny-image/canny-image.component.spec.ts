import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CannyImageComponent } from './canny-image.component';

describe('CannyImageComponent', () => {
  let component: CannyImageComponent;
  let fixture: ComponentFixture<CannyImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CannyImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CannyImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
