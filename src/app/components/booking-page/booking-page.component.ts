import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { isBefore } from 'date-fns';
import { roomList } from 'src/app/mock-data/all-rooms-data'

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss']
})
export class BookingPageComponent implements OnInit{
  allRoomList:any;
  date:Date = new Date;

  roomScheduleForm: FormGroup;
error: string | null = null;

constructor(private fb: FormBuilder) {

  this.roomScheduleForm = this.fb.group({
    roomControl : ['', Validators.required],
    date:['',Validators.required],
  timeRangeForm : this.fb.group({
    startTime: ['', Validators.required],
    endTime: ['', Validators.required],
  }, { validators: this.timeRangeValidator },
),
})
}
  ngOnInit(): void {
    this.allRoomList = roomList;
    console.log(this.roomScheduleForm)

  }



timeRangeValidator(group: FormGroup) {
  console.log(group)
  console.log(isBefore)
  const start = group.get('startTime')?.value;
  const end = group.get('endTime')?.value;

  if (start && end && isBefore(new Date(`1970-01-01T${end}`), new Date(`1970-01-01T${start}`))) {
    return { timeRangeInvalid: true };
  }
  return null;
}

onSubmit() {
  console.log(this.roomScheduleForm)
  if (this.roomScheduleForm.valid) {
let myFormValues = this.roomScheduleForm.value
console.log(myFormValues)

  } else {
    this.error = 'Invalid time range!';
  }
}

selectRoom(roomNo:any){
  console.log(roomNo)
  this.resetDateTime()
}

resetDateTime(){
  this.roomScheduleForm.patchValue({
    date: '',
    timeRangeForm: {
      startTime: '',
      endTime: '',
    },
  });

}
}
