import { Component, OnInit } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-load-bar',
  standalone: true,
  imports: [MatProgressBarModule],
  templateUrl: './load-bar.component.html',
  styleUrls: ['./load-bar.component.scss'],
})
export class LoadBarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
