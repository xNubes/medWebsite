import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDatenschutzComponent } from './page-datenschutz.component';

describe('PageDatenschutzComponent', () => {
  let component: PageDatenschutzComponent;
  let fixture: ComponentFixture<PageDatenschutzComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageDatenschutzComponent]
    });
    fixture = TestBed.createComponent(PageDatenschutzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
