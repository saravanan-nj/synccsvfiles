import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncfilesComponent } from './syncfiles.component';

describe('SyncfilesComponent', () => {
  let component: SyncfilesComponent;
  let fixture: ComponentFixture<SyncfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyncfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyncfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
