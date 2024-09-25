import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products = [
    { id: 1, name: "Astérix", price: 20, image: "/assets/images/asterix.jpg", alt: "Figurine d'Astérix", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis totam nostrum dolor quia ex. Aliquid libero iusto, odio officia cumque quia. Dolore at officiis omnis cum sequi quasi fuga neque." },
    { id: 2, name: "Obélix", price: 18.50, image: "/assets/images/obelix.jpg", alt: "FIgurine d'Obélix", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis totam nostrum dolor quia ex. Aliquid libero iusto, odio officia cumque quia. Dolore at officiis omnis cum sequi quasi fuga neque." },
    { id: 3, name: "Idéfix", price: 8.99, image: "/assets/images/idefix.jpg", alt: "Figurine d'Idéfix", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis totam nostrum dolor quia ex. Aliquid libero iusto, odio officia cumque quia. Dolore at officiis omnis cum sequi quasi fuga neque." },
    { id: 4, name: "Panoramix", price: 13.99, image: "/assets/images/panoramix.jpg", alt: "Figurine de Panoramix", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis totam nostrum dolor quia ex. Aliquid libero iusto, odio officia cumque quia. Dolore at officiis omnis cum sequi quasi fuga neque." },
    { id: 5, name: "Falbala", price: 20, image: "/assets/images/falbala.jpg", alt: "Figurine de Falbala", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis totam nostrum dolor quia ex. Aliquid libero iusto, odio officia cumque quia. Dolore at officiis omnis cum sequi quasi fuga neque." },
    { id: 6, name: "Abraracourcix", price: 29.99, image: "/assets/images/abraracourcix.jpg", alt: "Figurine d'Abraracourcix", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis totam nostrum dolor quia ex. Aliquid libero iusto, odio officia cumque quia. Dolore at officiis omnis cum sequi quasi fuga neque." },
    { id: 7, name: "Assurancetourix", price: 15, image: "assets/images/assurancetourix.jpg", alt: "Figurine d'Assurancetourix", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis totam nostrum dolor quia ex. Aliquid libero iusto, odio officia cumque quia. Dolore at officiis omnis cum sequi quasi fuga neque." }, 
    { id: 8, name: "Jules César", price: 15, image: "/assets/images/cesar.jpg", alt: "Figurine de Jules César", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis totam nostrum dolor quia ex. Aliquid libero iusto, odio officia cumque quia. Dolore at officiis omnis cum sequi quasi fuga neque." },
  ]

  constructor() {}

  getProducts() {
    return [...this.products];
  }

  getProductsById(id: number) {
    return this.products.find(product => product.id === id);
  }
}
