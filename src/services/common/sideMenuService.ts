import { Injectable } from '@angular/core';

// getting datas about the user
@Injectable()
export class SideMenuService {
  // current user of the running application
  navSelected :number = 0;

  constructor(){
  }

  //getting the user infos
  getNavSelected() : number{
      return this.navSelected;
  }

  //getting the user infos
  setNavSelected(selected: number) : void{
      this.navSelected = selected;
  }

}
