import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  couleur = 'couleur-defaut';
  font = 'font-defaut';
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  constructor(private breakpointObserver: BreakpointObserver) {}
  setFont(typeCouleur: string, typeFont: string) {
    this.couleur = typeCouleur;
    this.font = typeFont;
  }
  setTitle(titre: string): void {
    this.title = titre;
  }
}
