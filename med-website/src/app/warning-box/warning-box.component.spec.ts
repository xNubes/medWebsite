import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningBoxComponent } from './warning-box.component';

describe('WarningBoxComponent', () => {
  let component: WarningBoxComponent;
  let fixture: ComponentFixture<WarningBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WarningBoxComponent]
    });
    fixture = TestBed.createComponent(WarningBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
