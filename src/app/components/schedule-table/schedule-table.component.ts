import { Component, OnInit } from '@angular/core';
import { table_data } from 'src/app/mock-data/table-data';

@Component({
  selector: 'app-schedule-table',
  templateUrl: './schedule-table.component.html',
  styleUrls: ['./schedule-table.component.scss']
})
export class ScheduleTableComponent implements OnInit{

  tableData:any;

  ngOnInit(): void {
    this.tableData = table_data;
    console.log(this.tableData)
  }


}
