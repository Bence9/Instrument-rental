import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./page/home/home.component').then(m => m.HomeComponent),
    },
    {
        path: 'instrument',
        loadComponent: () => import('./page/instrument/instrument.component').then(m => m.InstrumentComponent),
    },
    {
        path: 'instrument/edit/:id',
        loadComponent: () => import('./page/instrument-edit/instrument-edit.component').then(m => m.InstrumentEditComponent),
    },
    {
        path: '**',
        redirectTo: '',
    },
];