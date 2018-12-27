import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveFormComponent } from './retrieve-form.component';

describe('RetrieveFormComponent', () => {
  let component: RetrieveFormComponent;
  let fixture: ComponentFixture<RetrieveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetrieveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
