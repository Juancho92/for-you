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
  active: any;

  displayPlay(){
    var element = document.getElementById("play");
    if(element == null && this.display2 == false){
      setTimeout(()=>{    
        this.display = true;
      }, 3000);
    }
  }

  addClass(id: any) {
    this.id = id;
    this.display = false;
    this.display2 = true;
    this.display3 = false;
    this.display4 = true;
  }

  showSpanish(){
    var element = document.getElementById("initial");
    if(element == null){
      this.display4 = false;
      this.display5 = true;
    }
  }

  shake(active: any) {
    this.active = active;
    setTimeout(()=>{    
      this.active = '2';
    }, 600);
  }

  inlove(active: any) {
    this.active = active;
  }
}
