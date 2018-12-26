import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPage1Page } from './sub-page1.page';

describe('SubPage1Page', () => {
  let component: SubPage1Page;
  let fixture: ComponentFixture<SubPage1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubPage1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubPage1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
