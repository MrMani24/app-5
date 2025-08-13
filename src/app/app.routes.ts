import { Routes } from '@angular/router';
import { PublicNavigation } from './+navigations/public-navigation/ui/public-navigation';
import { Home } from './+pages/public/home/ui/home';
import { Members } from './+pages/public/members/ui/members';
import { AboutAs } from './+pages/public/about-as/ui/about-as';
import { CallAs } from './+pages/public/call-as/ui/call-as';
import { PrivateNavigation } from './+navigations/private-navigation/ui/private-navigation';
import { Login } from './+pages/public/login/ui/login';
import { Users } from './+pages/private/users/ui/users';
import { Dashbord } from './+pages/private/dashbord/ui/dashbord';

export const routes: Routes = [
    {
        path: 'public', component: PublicNavigation, children: [
            { path: 'home', component: Home },
            { path: 'members', component: Members },
            { path: 'about', component: AboutAs },
            { path: 'call', component: CallAs },
            { path: '', redirectTo: 'home', pathMatch: 'prefix' }
        ],
    },
    {
        path: 'p010203', component: PrivateNavigation, children: [
            { path: 'dashbord', component: Dashbord },
            { path: 'users', component: Users },
            { path: '', redirectTo: 'dashbord', pathMatch: 'prefix' }
        ]
    },
    { path: 'login', component: Login },
    { path: '', redirectTo: 'public', pathMatch: 'full' },
];
