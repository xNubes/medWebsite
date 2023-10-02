import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageZeitenComponent } from './page-zeiten.component';

describe('PageZeitenComponent', () => {
  let component: PageZeitenComponent;
  let fixture: ComponentFixture<PageZeitenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageZeitenComponent]
    });
    fixture = TestBed.createComponent(PageZeitenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
