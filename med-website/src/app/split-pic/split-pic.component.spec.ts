import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitPicComponent } from './split-pic.component';

describe('SplitPicComponent', () => {
  let component: SplitPicComponent;
  let fixture: ComponentFixture<SplitPicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplitPicComponent]
    });
    fixture = TestBed.createComponent(SplitPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
