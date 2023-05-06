import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html'
})
export class ContadorComponent {
  public contador: number = 0;

  incrementar( valor: number ): void {
    this.contador += valor;
  }

  decrementar( valor: number ): void {
    this.contador -= valor;
  }

  reset(): void {
    this.contador = 0;
  }
}
