import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageImpfberatungComponent } from './page-impfberatung.component';

describe('PageImpfberatungComponent', () => {
  let component: PageImpfberatungComponent;
  let fixture: ComponentFixture<PageImpfberatungComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageImpfberatungComponent]
    });
    fixture = TestBed.createComponent(PageImpfberatungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
