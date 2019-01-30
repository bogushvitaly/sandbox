import { Routes } from '@angular/router';

export function routeDemoCovalentUi(
  index: any,
  contacts: any,
  dashboard: any,
  email: any,
  landing: any,
  chat: any,
  starter: any
): Routes {
  return [
    {
      path: '',
      component: index,
      children: [
        {
          path: 'contacts',
          component: contacts
        },
        {
          path: 'dashboard',
          component: dashboard
        },
        {
          path: 'email',
          component: email
        },
        {
          path: 'landing',
          component: landing
        },
        {
          path: 'chat',
          component: chat
        },
        {
          path: 'starter',
          component: starter
        }
      ]
    }
  ];
}
