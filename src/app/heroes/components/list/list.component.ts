import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  heroesList: string[] = ['Ironman', 'Spiderman', 'Thor', 'Hulk']
  borrado?: string;

  borrarUltimo() {
    this.borrado = this.heroesList.pop();
  }
}
