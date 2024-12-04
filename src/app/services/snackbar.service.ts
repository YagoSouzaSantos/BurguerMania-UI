import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  showSuccess(message: string): void {
    this.snackBar.open(message, '', {
      duration: 3000,
      panelClass: ['snackbar','success-snackbar'],
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  showError(message: string): void {
    this.snackBar.open(message, '', {
      duration: 3000,
      panelClass: ['snackbar','error-snackbar'],
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  showAlert(message: string): void {
    this.snackBar.open(message, '', {
      duration: 3000,
      panelClass: ['snackbar','alert-snackbar'],
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
