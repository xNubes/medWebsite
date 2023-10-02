import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageKontaktComponent } from './page-kontakt.component';

describe('PageKontaktComponent', () => {
  let component: PageKontaktComponent;
  let fixture: ComponentFixture<PageKontaktComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageKontaktComponent]
    });
    fixture = TestBed.createComponent(PageKontaktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
