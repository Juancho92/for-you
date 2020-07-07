import { Component } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fade', [ 
      state('in', style({ opacity: 1 })),
      transition('void => *', [
        style({ opacity: 0 }), 
        animate(1000, style({opacity: 1}))
      ]) 
    ])
  ]
})

export class AppComponent {
  title = 'foryou';
  display:boolean = false;
  display2:boolean = false;
  display3:boolean = true;
  display4:boolean = false;
  display5:boolean = false;
  id: any;

  displayPlay(){
    setTimeout(()=>{    
      this.display = true;
    }, 3000);
  }

  addClass(id: any) {
    this.id = id;
    this.display4 = true;
    this.display3 = false;
    this.display2 = true;
    this.display = false;
}
}
