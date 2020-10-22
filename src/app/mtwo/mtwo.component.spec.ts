import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtwoComponent } from './mtwo.component';

describe('MtwoComponent', () => {
  let component: MtwoComponent;
  let fixture: ComponentFixture<MtwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
