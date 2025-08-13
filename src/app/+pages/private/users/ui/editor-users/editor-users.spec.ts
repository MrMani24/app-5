import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorUsers } from './editor-users';

describe('EditorUsers', () => {
  let component: EditorUsers;
  let fixture: ComponentFixture<EditorUsers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditorUsers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorUsers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
