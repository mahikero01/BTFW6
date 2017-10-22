import { 
  Component, 
  OnInit, 
  Input,
  HostBinding,
  HostListener
} from '@angular/core';
import { Router } from '@angular/router';

import { 
  MenuItem,
  MenuService } from '../../services/menu.service';

@Component({
  selector: 'btfw-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() item = <MenuItem>null; //see angular-cli issue #2034
  @HostBinding('class.parent-is-popup')
  @Input() parentIsPopup = true;
  isActiveRoute = false;

  mouseInItem = false;
  mouseInPopup = false;
  popupLeft = 0;
  popupTop = 34;

  constructor(
      private menuService: MenuService,
      private router: Router) { }

  ngOnInit() {
  }

  onPopupMouseEnter(event) : void {
    if (!this.menuService.isVertical) {
      this.mouseInPopup = true;
    }
  }

  onPopupMouseLeave(event) : void {
    if (!this.menuService.isVertical) {
      this.mouseInPopup = false;
    }
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event) : void {
    if (!this.menuService.isVertical) {
      this.mouseInItem = false;
    }
  }

  @HostListener('mouseenter', ['$event'])
  onMouseEnter() : void {
    if (!this.menuService.isVertical) {
      if (this.item.submenu){
        this.mouseInItem = true;
        if (this.parentIsPopup) {
          this.popupLeft = 160;
          this.popupTop = 0;
        }
      }
      
    }
  }
}
