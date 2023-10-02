import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwappingPicComponent } from './swapping-pic.component';

describe('SwappingPicComponent', () => {
  let component: SwappingPicComponent;
  let fixture: ComponentFixture<SwappingPicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwappingPicComponent]
    });
    fixture = TestBed.createComponent(SwappingPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
