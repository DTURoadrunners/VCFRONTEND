import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMemberlistComponent } from './project-memberlist.component';

describe('ProjectMemberlistComponent', () => {
  let component: ProjectMemberlistComponent;
  let fixture: ComponentFixture<ProjectMemberlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectMemberlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectMemberlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
