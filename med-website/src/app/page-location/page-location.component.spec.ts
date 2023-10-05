import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLocationComponent } from './page-location.component';

describe('PageLocationComponent', () => {
  let component: PageLocationComponent;
  let fixture: ComponentFixture<PageLocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageLocationComponent]
    });
    fixture = TestBed.createComponent(PageLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
