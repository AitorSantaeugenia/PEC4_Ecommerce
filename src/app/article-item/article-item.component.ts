import { Component, Input, Output, EventEmitter } from '@angular/core';
import {ArticleItemComponentDataType} from "./article-item-interface"

@Component({
  selector: 'article-item',
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css'
})
export class ArticleItemComponent {
  title = "article";

  counter:number=0;

  article_list: ArticleItemComponentDataType[] = [
    {
      id:1,
      name: "Modelo De Máquina De Escribir Retro",
      imageUrl: "./../../assets/images/article-1.png",
      price: 87.59,
      isOnSale: true,
      quantityInCart:10,
    },
    {
      id:2,
      name: "Cámara réflex Canon EOS 2000D",
      imageUrl: "./../../assets/images/article-2.png",
      price: 429,
      isOnSale: false,
      quantityInCart:0,
    },
    {
      id:3,
      name: "Monitor FHD de 21,5 pulgadas, ThinkVision",
      imageUrl: "./../../assets/images/article-3.png",
      price: 119,
      isOnSale: true,
      quantityInCart:20,
    }
  ];

  ngOnInit(): void {
  }

  incCounter(counter:number, onStock:number){
    if(counter < onStock){
      this.counter++;
    }else{
      this.counter == onStock;
    }
  } 

  decCounter(counter:number, onStock:number){
    this.counter--;
  }
}
