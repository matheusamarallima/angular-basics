import {Component, computed, EventEmitter, Input, input, Output, signal} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {Product} from "../../../../shared/interfaces/product.interface";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardActions,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  product = input.required<Product>();
  productTitle = computed(()=> this.product().title)
  @Output() edit = new EventEmitter();

  onEdit(){
    this.edit.emit()
  }

}
