import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { DemoCovalentUiBaseComponent } from '@application/features';

@Component({
  selector: 'app-demo-covalent-ui',
  templateUrl: 'demo-covalent-ui.component.html'
})
export class DemoCovalentUiComponent extends DemoCovalentUiBaseComponent {
  routes: Object[] = [
    {
      title: 'Dashboard',
      route: '/demo-covalent-ui/dashboard',
      icon: 'dashboard'
    },
    {
      title: 'Manage Users',
      route: '/demo-covalent-ui/users',
      icon: 'people'
    },
    {
      title: 'Contacts',
      route: '/demo-covalent-ui/contacts',
      icon: 'people'
    },
    {
      title: 'Email',
      route: '/demo-covalent-ui/email',
      icon: 'people'
    },
    {
      title: 'Chat',
      route: '/demo-covalent-ui/chat',
      icon: 'people'
    },
    {
      title: 'Starter',
      route: '/demo-covalent-ui/starter',
      icon: 'people'
    },
    {
      title: 'Landing',
      route: '/demo-covalent-ui/landing',
      icon: 'people'
    }
  ];

  constructor(private router: Router) {
    super();
  }

  logout(): void {
    this.router.navigate(['/demo-covalent-ui/login']);
  }
}
