import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const M: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  instance: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initSidenav();
  }

  navigate(path: string): void {
    this.router.navigate([path]);
  }

  onClose(path: string): void {
    this.instance.close();
    this.navigate(path);
  }

  private initSidenav(): void {
    const sidenav = document.querySelector('.sidenav');
    this.instance = M.Sidenav.init(sidenav, {});
  }
}
