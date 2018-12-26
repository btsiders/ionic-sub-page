import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Thing2Page } from './list.page';

describe('Thing2Page', () => {
  let component: Thing2Page;
  let fixture: ComponentFixture<Thing2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Thing2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(async () => {
    fixture = await TestBed.createComponent(Thing2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
