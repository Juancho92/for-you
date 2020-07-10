import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';

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
    ]),
    trigger('fadeOut', [ 
      state('in', style({ opacity: 1 })),
      transition('* => void', [
        animate(300, style({opacity: 0}))
      ])
    ])
  ] 
})

export class AppComponent implements OnInit {
  title = 'foryou';
  once: boolean = false;
  display:boolean = false;
  display2:boolean = false;
  display3:boolean = true;
  display4:boolean = false;
  display5:boolean = false;
  display6:boolean = false;
  display7:boolean = true;
  display8:boolean = false;
  id: any;
  active: any;
  active2: boolean = false;
  active3: boolean = false;
  active4: boolean = false;
  active5: boolean = false;
  active6: boolean = false;
  active7: boolean = false;
  active8: boolean = false;
  active9: boolean = true;
  active10: boolean = false;
  active11: boolean = false;
  active12: boolean = false;
  active13: boolean = false;
  spacecrr = 0;
  spacefn = '';
  isChecked1 =false;
  isChecked2 =false;
  isChecked3 =false;
  isChecked4 =false;
  private: string;
  private1: boolean = false;

  @ViewChild('beyli') myDiv1: ElementRef;
  @ViewChild('bird') myDiv2: ElementRef;
  @ViewChild('gandalf') myDiv3: ElementRef;
  @ViewChild('phone') myDiv4: ElementRef;

  constructor() {}

  ngOnInit() {
    this.private = new URLSearchParams(window.location.search).get('password');
    if(this.private == 'livytl93'){
      this.private1 = true;
    } else {
      this.private1 = false;
    }
  }

  swipeleft(event) {
    this.active9 = false;
    this.active8 = true;
    var photos = document.getElementsByClassName("photo").length;
    if (this.spacecrr < ((photos - 1) * 100)) {
      this.spacecrr += 100;
      this.spacefn = '-' + this.spacecrr + 'vw';
    } else {
      this.spacecrr = 0;
      this.spacefn = '0vw';
    }
  }
  swiperight(event) {
    this.active9 = false;
    this.active8 = true;
    var photos = document.getElementsByClassName("photo").length;
    if (this.spacecrr >= 0 && this.spacecrr <= ((photos - 1) * 100)) {
      this.spacecrr -= 100;
      this.spacefn = '-' + this.spacecrr + 'vw';
    }
  }

  displayPlay(){   
    var element = document.getElementById("play");
    if (!this.once){
      this.once = true;
      if(element == null && this.display2 == false){ 
        this.once = true;
        setTimeout(()=>{ 
          this.display7 = false;  
          this.display = true; 
        }, 2500);
      }
    }
  }

  addClass(id: any) {
    this.id = id;
    this.display = false;
    this.display2 = true;
    this.display3 = false;
    this.display4 = true;
    this.display8 = true;
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
      this.display8 = false;
      this.active6 = true;
      setTimeout(()=>{ 
        this.active2 = false;
        this.active3 = false;
        this.active5 = false;   
        this.active6 = false;
        this.active7 = true;
        this.active8 = false;
        this.active9 = true;
        this.active10 = false;
        this.active11 = false;
      }, 100);
    } 
  }

  close(){
    this.active7 = false;
    this.display8 = true;
    this.active12 = false;
    this.active13 = false;
  }

  finger(){
    this.active9 = false;
    this.active8 = true;
  }

  hint(){
    if(this.myDiv4.nativeElement.classList.contains('color')){
      if (!this.once){
        this.once = true;
        this.active10 = false;
        this.active11 = true;
        setTimeout(()=>{ 
          this.active11 = false;
        }, 5500);
      } else {
        this.once = false;
        this.active11 = false;
        this.active10 = true;
        setTimeout(()=>{ 
          this.active10 = false;
        }, 5500);
      }
    }
  }

  phrase1(event){
    this.active12 = true;
  }

  phrase2(event){
    this.active13 = true;
  }

  refresh(){
    this.id = 2;
    this.once = false;
    this.isChecked1 =false;
    this.isChecked2 =false;
    this.isChecked3 =false;
    this.isChecked4 =false;
    this.active2 = false;
    this.active3 = false;
    this.active5 = false;
    this.active10 = false;
    this.active11 = false;
    this.display = false;
    this.display2 = false;
    this.display3 = true;
    this.display4 = false;
    this.display5 = false;
    this.display6 = false;
    this.display7 = true;
    this.display8 = false;
  }
}
