import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products = [
    { id: 1, name: "Astérix", price: 20, image: "/assets/images/asterix.jpg", alt: "Figurine d'Astérix" },
    { id: 2, name: "Obélix", price: 18.50, image: "/assets/images/obelix.jpg", alt: "FIgurine d'Obélix" },
    { id: 3, name: "Idéfix", price: 8.99, image: "/assets/images/idefix.jpg", alt: "Figurine d'Idéfix" },
    { id: 4, name: "Panoramix", price: 13.99, image: "/assets/images/panoramix.jpg", alt: "Figurine de Panoramix"},
    { id: 5, name: "Falbala", price: 20, image: "/assets/images/falbala.jpg", alt: "Figurine de Falbala"},
    { id: 6, name: "Abraracourcix", price: 29.99, image: "/assets/images/abraracourcix.jpg", alt: "Figurine d'Abraracourcix"},
    { id: 7, name: "Assurancetourix", price: 15, image: "assets/images/assurancetourix.jpg", alt: "Figurine d'Assurancetourix"}, 
    { id: 8, name: "Jules César", price: 15, image: "/assets/images/cesar.jpg", alt: "Figurine de Jules César"},
  ]

  constructor() {}

  getProducts() {
    return [...this.products];
  }
}
