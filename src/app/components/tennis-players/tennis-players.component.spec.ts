import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TennisPlayersComponent } from './tennis-players.component';

describe('TennisPlayersComponent', () => {
  let component: TennisPlayersComponent;
  let fixture: ComponentFixture<TennisPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TennisPlayersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TennisPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
