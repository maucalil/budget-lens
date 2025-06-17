import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [SidebarComponent, RouterOutlet],
  template: `
    <div class="flex h-screen w-full">
      <app-sidebar />
      <main class="flex-1 px-4 py-3 overflow-y-auto">
        <router-outlet />
      </main>
    </div>
  `,
})
export class LayoutComponent {}
