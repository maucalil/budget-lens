import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SidebarItem } from './sidebar-item.interface';
import { sidebarItems } from './sidebar-items.data';
import {
  faAngleLeft,
  faAngleRight,
  faBars,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { BREAKPOINTS } from '@shared/constants';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, FontAwesomeModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  isMobileVisible = signal(false);
  isExpanded = signal(true);
  sidebarItems: SidebarItem[] = sidebarItems;

  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
  faBars = faBars;
  faXmark = faXmark;

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth >= BREAKPOINTS.sm) {
      this.isMobileVisible.set(false);
    }
  }

  toggleExpansion() {
    this.isExpanded.update(value => !value);
  }

  toggleMobileVisibility() {
    this.isMobileVisible.update(v => !v);
    this.isExpanded.set(true);
  }
}
