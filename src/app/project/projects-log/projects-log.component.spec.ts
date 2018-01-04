import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsLogComponent } from './projects-log.component';

describe('ProjectsLogComponent', () => {
  let component: ProjectsLogComponent;
  let fixture: ComponentFixture<ProjectsLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
