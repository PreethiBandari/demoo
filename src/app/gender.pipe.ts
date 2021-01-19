import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: any, ...gender: any[]): any {
    if(gender[0]=== 'M'){
      return 'Mr. '+ value;
    }else{
      return 'Miss. '+ value;
    }

  }

}
