import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BarraPrincipalComponent } from '../barra-principal/barra-principal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BarraPrincipalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
