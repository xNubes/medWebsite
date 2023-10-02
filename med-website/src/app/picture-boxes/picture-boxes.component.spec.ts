import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureBoxesComponent } from './picture-boxes.component';

describe('PictureBoxesComponent', () => {
  let component: PictureBoxesComponent;
  let fixture: ComponentFixture<PictureBoxesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PictureBoxesComponent]
    });
    fixture = TestBed.createComponent(PictureBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
