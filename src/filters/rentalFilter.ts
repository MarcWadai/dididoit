import {Pipe} from '@angular/core';

// Tell Angular2 we're creating a Pipe with TypeScript decorators
@Pipe({
  name: 'RentalPipe'
})
export class RentalFilter {
  // Transform is the new "return function(value, args)" in Angular 1.x
  transform(value, args?) {
    // ES6 array destructuring
    if (value.length > 0){
      let rental = (args) ? args : {id :"all"};
      if (rental.id == "all"){
        return value;
      }else{
        let filtered =  value.filter(one => {
          return one.rental.id == rental.id;
        });        
        return (filtered) ? filtered : [];
      }
    }else{
      return [];
    }
  }

}
