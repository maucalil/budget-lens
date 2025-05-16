import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SidebarItem } from './sidebar-item.interface';
import { sidebarItems } from './sidebar-items.data';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, FontAwesomeModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  isExpanded = signal(true);
  sidebarItems: SidebarItem[] = sidebarItems;
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;

  toggleSidebar() {
    this.isExpanded.update(value => !value);
  }
}
