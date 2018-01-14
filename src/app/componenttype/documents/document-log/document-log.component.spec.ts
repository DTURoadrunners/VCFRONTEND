import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentLogComponent } from './document-log.component';

describe('DocumentLogComponent', () => {
  let component: DocumentLogComponent;
  let fixture: ComponentFixture<DocumentLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
