import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive ({

  // [attribute selector]
  selector: '[appDropdown]'
})

export class DropdownDirective {

  // HostBinding allows us to BIND props to the element the directive is placed on
  // (bind to: the real css class: open) Open is the class we need to add/remove dynamically.
  @HostBinding('class.open') isOpen = false;

  // listen for ('click') execute a function
  @HostListener ('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }






}


