import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTermineComponent } from './page-termine.component';

describe('PageTermineComponent', () => {
  let component: PageTermineComponent;
  let fixture: ComponentFixture<PageTermineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageTermineComponent]
    });
    fixture = TestBed.createComponent(PageTermineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
