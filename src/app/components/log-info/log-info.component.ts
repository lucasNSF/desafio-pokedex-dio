import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {
  MAT_SNACK_BAR_DATA,
  MatSnackBarModule,
} from '@angular/material/snack-bar';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-log-info',
  standalone: true,
  templateUrl: './log-info.component.html',
  styleUrls: ['./log-info.component.scss'],
  imports: [CommonModule, MatSnackBarModule, MatIconModule],
})
export class LogInfoComponent {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public message: string,
    private snackbarService: SnackbarService
  ) {}

  closeLog() {
    this.snackbarService.closeLog();
  }
}
