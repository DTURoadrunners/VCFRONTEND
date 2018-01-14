import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLogComponent } from './component-log.component';

describe('ComponentLogComponent', () => {
  let component: ComponentLogComponent;
  let fixture: ComponentFixture<ComponentLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
