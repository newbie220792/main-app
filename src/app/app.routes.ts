import {Routes} from '@angular/router';
import {loadRemoteModule} from '@angular-architects/module-federation';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4200/remoteEntry.js',
      exposedModule: './App'
    }),
  }
];
