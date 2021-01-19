import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showemp',
  templateUrl: './showemp.component.html',
  styleUrls: ['./showemp.component.css']
})
export class ShowempComponent implements OnInit {

  employees: any;
  constructor() {
   this.employees=[{empId:101,empName:'Akhil',salary:675456, gender:'M',doj:'2-3-2003',loginId:'akhil',password:'akhil123'},
               {empId:102,empName:'Ganesh',salary:876788, gender:'M',doj:'1-2-2015',loginId:'ganesh',password:'ganesh123'},
             {empId:103,empName:'Datta',salary:987567, gender:'M',doj:'2-3-2004',loginId:'datta',password:'datta123'},
            {empId:104,empName:'Pretty',salary:987569, gender:'F',doj:'1-2-2009',loginId:'pretty',password:'pretty123'}];

  }

  ngOnInit(): void{
  }

}
