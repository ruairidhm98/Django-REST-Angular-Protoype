import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetSearchComponent } from './snippet-search.component';

describe('SnippetSearchComponent', () => {
  let component: SnippetSearchComponent;
  let fixture: ComponentFixture<SnippetSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnippetSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnippetSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
