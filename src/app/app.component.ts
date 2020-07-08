import { Component, ElementRef, ViewChild } from '@angular/core';
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
  display6:boolean = false;
  display7:boolean = true;
  id: any;
  active: any;
  active2: boolean = false;
  active3: boolean = false;
  active4: boolean = false;
  active5: boolean = false;
  active6: boolean = false;

  @ViewChild('beyli') myDiv1: ElementRef;
  @ViewChild('bird') myDiv2: ElementRef;
  @ViewChild('gandalf') myDiv3: ElementRef;
  @ViewChild('phone') myDiv4: ElementRef;

  displayPlay(){
    var element = document.getElementById("play");
    if(element == null && this.display2 == false){
      setTimeout(()=>{ 
        this.display7 = false;   
        this.display = true;
      }, 2500);
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
    var element1 = document.getElementById("initial");
    var element2 = document.getElementById("second");
    var element3 = document.getElementById("third");
    if(element1 == null){
      if(element2 == null){
        if(element3 == null){
          this.display4 = false;
          this.display5 = true;
        } else {
          this.display6 = false;
          this.display4 = true;
        }
      } else {
        if(element3 == null){
          this.display5 = false;
          this.display6 = true;
        } else {
          this.display6 = false;
          this.display4 = true;
        }
      }
    }
  }

  shake(active: any) {
    this.active = active;
    if(this.myDiv2.nativeElement.classList.contains('color')){
      if(this.active3){
        this.active3 = false;
        setTimeout(()=>{    
          this.active3 = true;
        }, 600);
      }
      this.active4 = true;
    } 
    setTimeout(()=>{    
      this.active = '2';
      this.active4 = false;
    }, 600);
  }

  inlove() {
    if(this.myDiv1.nativeElement.classList.contains('color')){
      this.active2 = true;
      setTimeout(()=>{    
        this.active2 = false;
      }, 20000);
    } 
  }

  chirp() {
    if(this.myDiv2.nativeElement.classList.contains('color')){
      this.active3 = true;
    } 
  }

  bark() {
    if(this.myDiv3.nativeElement.classList.contains('color')){
      this.active5 = true;
    } 
  }

  flash(){
    if(this.myDiv4.nativeElement.classList.contains('color')){
      this.active6 = true;
      setTimeout(()=>{ 
        this.active2 = false;
        this.active3 = false;
        this.active5 = false;   
        this.active6 = false;
      }, 200);
    } 
  }
}
