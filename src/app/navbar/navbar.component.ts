import { Component } from '@angular/core';
@Component({
selector: 'db-navbar',
templateUrl: 'app/navbar/navbar.component.html'
})

export interface NavItem {
// Navigation link
href: string;
// Navigation Label
label: string;
// Status of Navigation Item
active: boolean;
}
export class NavbarComponent {
	// App name
appName: string = 'Dream Bean';
// Navgation items
navItems: NavItem[] = [
{href: '#', label: 'Home', active: true},
{href: '#', label: 'Products', active: false},
{href: '#', label: 'Checkout', active: false},
{href: '#', label: 'Sign out', active: false}
];
}