import { Component, signal } from '@angular/core';
import { SidebarItem } from './sidebar-item.interface';
import { sidebarItems } from './sidebar-items.data';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-shared-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  isExpanded = signal(true);
  sidebarItems: SidebarItem[] = sidebarItems;

  toggleSidebar() {
    this.isExpanded.update(value => !value);
  }
}
