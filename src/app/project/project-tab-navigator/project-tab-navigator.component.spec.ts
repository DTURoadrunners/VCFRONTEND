import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTabNavigatorComponent } from './project-tab-navigator.component';

describe('ProjectTabNavigatorComponent', () => {
  let component: ProjectTabNavigatorComponent;
  let fixture: ComponentFixture<ProjectTabNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectTabNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTabNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
