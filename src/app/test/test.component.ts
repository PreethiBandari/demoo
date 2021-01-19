import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  //variables
  age: number;
  name: string;
  salary: number;
  hobbies: any;
  address: any;
  message: string;
  

  constructor() { 
    this.age=25;
    this.name='JOHN';
    this.salary=9999.99
    this.hobbies=['PAINTING','SINGING','DANCING'];
    this.address={doorNo:'10-11',street:'Street1',city:'HYDERABAD'};
    this.message='';
    
  }

  ngOnInit():void {
  }

  showMessage(): void {
    alert('show method is called..');
    console.log(this.message);
  }
}
