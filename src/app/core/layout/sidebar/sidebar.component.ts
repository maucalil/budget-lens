import { Component, HostListener, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SidebarItem } from './sidebar-item.interface';
import { sidebarFooterItems, sidebarItems } from './sidebar-items.data';
import {
  faAngleLeft,
  faAngleRight,
  faBars,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { BREAKPOINTS } from '@shared/constants';
import { AuthService } from '@core/services';

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
  sidebarFooterItems: SidebarItem[] = sidebarFooterItems;

  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
  faBars = faBars;
  faXmark = faXmark;

  private authService = inject(AuthService);
  private router = inject(Router);

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

  logout() {
    this.authService.logout().subscribe({
      error: err => {
        console.error('Logout failed', err); // TODO better error handling
      },
      complete: () => {
        this.isMobileVisible.set(false);
        this.router.navigate(['/authenticate']);
      },
    });
  }
}
