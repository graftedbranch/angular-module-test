import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDeetsComponent } from './app-deets.component';

describe('AppDeetsComponent', () => {
  let component: AppDeetsComponent;
  let fixture: ComponentFixture<AppDeetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDeetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDeetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
