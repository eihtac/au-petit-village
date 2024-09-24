import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../services/products.service';
import { HttpBackend } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {

  products: any[] = [];
  filteredProducts: any[] = [];
  searchTerm: string = '';
  sortDirection: string = 'asc';

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.products = this.productsService.getProducts();
    this.filteredProducts = [...this.products];
  }

  sortProducts(event: Event) {
    const target = event.target as HTMLSelectElement;
    const direction = target.value;

    if (!direction) return;

    if (direction === 'asc') {
      this.filteredProducts.sort((a, b) => a.price - b.price);
    } else if (direction === 'desc') {
      this.filteredProducts.sort((a, b) => b.price - a.price);
    }
  }

  filterProducts() {
    this.filteredProducts = this.products.filter((product: any) =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
