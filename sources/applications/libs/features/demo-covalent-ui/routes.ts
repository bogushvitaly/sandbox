import { Routes } from '@angular/router';

export function routeDemoCovalentUi(
  index: any,
  login: any,
  contacts: any,
  dashboard: any,
  users: any,
  usersForm: any,
  email: any,
  landing: any,
  chat: any,
  starter: any
): Routes {
  return [
    {
      path: 'login',
      component: login
    },
    {
      path: '',
      component: index,
      children: [
        {
          path: '',
          redirectTo: 'dashboard'
        },
        {
          path: 'dashboard',
          component: dashboard
        },
        {
          path: 'users',
          children: [
            {
              path: '',
              component: users
            },
            {
              path: 'add',
              component: usersForm
            },
            {
              path: ':id/edit',
              component: usersForm
            }
          ]
        }
      ]
    },
    {
      path: 'contacts',
      component: contacts
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
  ];
}
