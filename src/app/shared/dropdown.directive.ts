import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive ({
 selector: '[appDropDown]'
})
export class DropdownDirective {
 @HostBinding ('class.open') isOpen = false;
 @HostListener ('click')toggleOpen() {
   console.log(1);
   this.isOpen = !this.isOpen;
 }
}
