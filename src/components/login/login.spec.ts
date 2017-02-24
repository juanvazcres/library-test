import {LoginComponent} from './login';
import {TestBed, async} from '@angular/core/testing';

describe('login component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [LoginComponent]});
    TestBed.compileComponents();
  }));

  it('should render...', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    expect(true).toBe(true);
  });
});
