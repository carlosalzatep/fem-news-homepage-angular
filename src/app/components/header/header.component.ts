import { Component } from '@angular/core';

const TOGGLE_MENU_CLASS_NAME: string = 'active';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {

  openMenu(openButton: Element) {
    openButton.classList.add(TOGGLE_MENU_CLASS_NAME);
  }

  closeMenu(openButton: Element) {
    openButton.classList.remove(TOGGLE_MENU_CLASS_NAME);
  }
}
