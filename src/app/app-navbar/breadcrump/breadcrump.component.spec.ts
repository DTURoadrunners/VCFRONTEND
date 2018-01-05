import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumpComponent } from './breadcrump.component';

describe('BreadcrumpComponent', () => {
  let component: BreadcrumpComponent;
  let fixture: ComponentFixture<BreadcrumpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
