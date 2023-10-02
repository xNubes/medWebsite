import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAnfahrtComponent } from './page-anfahrt.component';

describe('PageAnfahrtComponent', () => {
  let component: PageAnfahrtComponent;
  let fixture: ComponentFixture<PageAnfahrtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageAnfahrtComponent]
    });
    fixture = TestBed.createComponent(PageAnfahrtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
