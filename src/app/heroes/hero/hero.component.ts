import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  nombre: string = 'Spiderman';
  edad: number = 25;

  get capitalizado(): string {
    return this.nombre.toUpperCase();
  }

  getHeroDescription(): string {
    return `${ this.nombre } - ${ this.edad }`
  }

  changeHero(): void {
    this.nombre = 'Ironman'
  }

  changeEdad(): void {
    this.edad = 45
  }

  reset(): void {
    this.nombre = 'Spiderman'
    this.edad = 25
  }
}
