import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPage2Page } from './sub-page2.page';

describe('SubPage2Page', () => {
  let component: SubPage2Page;
  let fixture: ComponentFixture<SubPage2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubPage2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubPage2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
