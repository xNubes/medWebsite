import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTeamComponent } from './page-team.component';

describe('PageTeamComponent', () => {
  let component: PageTeamComponent;
  let fixture: ComponentFixture<PageTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageTeamComponent]
    });
    fixture = TestBed.createComponent(PageTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
