import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectComponenttypeComponent } from './project-componenttype.component';

describe('ProjectComponenttypeComponent', () => {
  let component: ProjectComponenttypeComponent;
  let fixture: ComponentFixture<ProjectComponenttypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectComponenttypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectComponenttypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
