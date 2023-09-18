import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [SearchBarComponent, CommonModule],
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
