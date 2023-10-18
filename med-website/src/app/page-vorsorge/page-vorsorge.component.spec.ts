import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageVorsorgeComponent } from './page-vorsorge.component';

describe('PageVorsorgeComponent', () => {
  let component: PageVorsorgeComponent;
  let fixture: ComponentFixture<PageVorsorgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageVorsorgeComponent]
    });
    fixture = TestBed.createComponent(PageVorsorgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
