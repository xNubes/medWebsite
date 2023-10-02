import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLeistungenComponent } from './page-leistungen.component';

describe('PageLeistungenComponent', () => {
  let component: PageLeistungenComponent;
  let fixture: ComponentFixture<PageLeistungenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageLeistungenComponent]
    });
    fixture = TestBed.createComponent(PageLeistungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
