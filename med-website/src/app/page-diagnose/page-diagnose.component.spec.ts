import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDiagnoseComponent } from './page-diagnose.component';

describe('PageDiagnoseComponent', () => {
  let component: PageDiagnoseComponent;
  let fixture: ComponentFixture<PageDiagnoseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageDiagnoseComponent]
    });
    fixture = TestBed.createComponent(PageDiagnoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
