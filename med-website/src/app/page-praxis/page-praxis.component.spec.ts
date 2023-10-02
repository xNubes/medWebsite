import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePraxisComponent } from './page-praxis.component';

describe('PagePraxisComponent', () => {
  let component: PagePraxisComponent;
  let fixture: ComponentFixture<PagePraxisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagePraxisComponent]
    });
    fixture = TestBed.createComponent(PagePraxisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
