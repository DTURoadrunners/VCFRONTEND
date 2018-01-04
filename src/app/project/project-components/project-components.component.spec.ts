import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectComponentsComponent } from './project-components.component';

describe('ProjectComponentsComponent', () => {
  let component: ProjectComponentsComponent;
  let fixture: ComponentFixture<ProjectComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
