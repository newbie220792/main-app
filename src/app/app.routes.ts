import {Routes} from '@angular/router';
import {loadRemoteModule} from '@angular-architects/module-federation';
import {NotFoundComponent} from '../components/common/not-found/not-found';

export const routes: Routes = [
  {
    path: '**',
    component: NotFoundComponent,
  },
  {
    path: 'sso-app',
    loadComponent: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost/sso-app/remoteEntry.js',
      exposedModule: './App'
    }),
  },
  {
    path: 'dashboard',
    loadComponent: () => loadRemoteModule({
      type: 'script',
      remoteEntry: 'http://localhost:5000/remoteEntry.js',
      exposedModule: './Dashboard',
      remoteName: 'vocabularyApp'
    }),
  }
];
