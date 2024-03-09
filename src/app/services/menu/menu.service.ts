import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menuOpen: EventEmitter<boolean> = new EventEmitter<boolean>;

  constructor() { }

  emitMenuOpen(open: boolean) {
    this.menuOpen.emit(open);
  }
}
