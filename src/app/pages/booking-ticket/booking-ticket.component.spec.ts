import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingTicketComponent } from './booking-ticket.component';

describe('BookingTicketComponent', () => {
  let component: BookingTicketComponent;
  let fixture: ComponentFixture<BookingTicketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingTicketComponent]
    });
    fixture = TestBed.createComponent(BookingTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
