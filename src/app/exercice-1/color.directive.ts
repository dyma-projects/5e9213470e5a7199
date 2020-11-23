import { Directive, HostBinding, HostListener, Input, OnInit } from "@angular/core";


@Directive({
    selector: '[mycolor]'
})
    
export class MyColor {
    @HostBinding('style.color') color;
  
    @Input('mycolor') data;

    @HostListener('window:keydown', ['$event']) keyEvent($event: KeyboardEvent) {
        
     if($event.key == "ArrowRight"){
     this.color = this.data.right
   }

   if($event.key == "ArrowLeft"){
     this.color = this.data.left
   }

   if($event.key == "ArrowUp"){
     this.color = this.data.up
   }

   if($event.key == "ArrowDown"){
     this.color = this.data.down
   }
  }
        
    }





    
    


  
