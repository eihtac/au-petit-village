import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../services/products.service';
import { FormsModule } from '@angular/forms';
import { SortByPricePipe } from '../sort-by-price.pipe';
import { FilterByNamePipe } from '../filter-by-name.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, SortByPricePipe, FilterByNamePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  products: any[] = [];
  searchTerm: string = '';
  sortDirection: string = '';

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }
}
