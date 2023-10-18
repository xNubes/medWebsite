import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBehandlungComponent } from './page-behandlung.component';

describe('PageBehandlungComponent', () => {
  let component: PageBehandlungComponent;
  let fixture: ComponentFixture<PageBehandlungComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageBehandlungComponent]
    });
    fixture = TestBed.createComponent(PageBehandlungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
