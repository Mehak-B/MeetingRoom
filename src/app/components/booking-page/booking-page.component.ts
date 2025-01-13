import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { roomList } from 'src/app/mock-data/all-rooms-data'

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss']
})
export class BookingPageComponent {
  allRoomList = roomList
  value:Date = new Date;
roomControl = new FormControl()
}
