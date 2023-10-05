import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { LogInfoComponent } from 'src/app/components/log-info/log-info.component';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  private snackbarConfig: {
    duration: number;
    horizontalPosition: MatSnackBarHorizontalPosition;
    verticalPosition: MatSnackBarVerticalPosition;
  } = {
    duration: 1500,
    horizontalPosition: 'end',
    verticalPosition: 'top',
  };

  constructor(private snackBar: MatSnackBar) {}

  showErrorLog(message: string) {
    this.snackBar.openFromComponent(LogInfoComponent, {
      data: message,
      panelClass: ['error-snackbar'],
      ...this.snackbarConfig,
    });
  }

  closeLog() {
    this.snackBar.dismiss();
  }
}
