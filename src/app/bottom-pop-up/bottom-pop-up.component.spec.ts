import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomPopUpComponent } from './bottom-pop-up.component';

describe('BottomPopUpComponent', () => {
  let component: BottomPopUpComponent;
  let fixture: ComponentFixture<BottomPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
