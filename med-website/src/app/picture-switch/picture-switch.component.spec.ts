import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureSwitchComponent } from './picture-switch.component';

describe('PictureSwitchComponent', () => {
  let component: PictureSwitchComponent;
  let fixture: ComponentFixture<PictureSwitchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PictureSwitchComponent]
    });
    fixture = TestBed.createComponent(PictureSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
