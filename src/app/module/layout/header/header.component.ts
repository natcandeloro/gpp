import { Component,  ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @ViewChild('sidenav') sidenav!: MatDrawer;
  isMobile: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );
 
 constructor(private breakpointObserver: BreakpointObserver) {}
 
 closeSideNav() {
  if (this.isMobile) {
    this.sidenav.close();
  }
 }

}
