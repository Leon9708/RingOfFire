import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgToDialogComponent } from './img-to-dialog.component';

describe('ImgToDialogComponent', () => {
  let component: ImgToDialogComponent;
  let fixture: ComponentFixture<ImgToDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgToDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgToDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
