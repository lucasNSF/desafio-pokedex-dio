import { Injectable, ViewContainerRef } from '@angular/core';
import { LoadBarComponent } from 'src/app/components/load-bar/load-bar.component';

@Injectable({
  providedIn: 'root',
})
export class LoadBarService {
  addLoadBar(viewContainerRef: ViewContainerRef) {
    return viewContainerRef.createComponent(LoadBarComponent);
  }

  closeLoadBar(viewContainerRef: ViewContainerRef) {
    viewContainerRef.clear();
  }
}
