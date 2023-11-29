import { Component,  } from '@angular/core';
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
      name: "Modelo De Máquina De Escribir Retro",
      imageUrl: "./../../assets/images/article-1.png",
      price: 87.59,
      isOnSale: true,
      quantityInCart:10,
    },
    {
      name: "Modelo De Máquina De Escribir Retro",
      imageUrl: "./../../assets/images/article-1.png",
      price: 87.59,
      isOnSale: false,
      quantityInCart:0,
    }
  ];

  ngOnInit(): void {
  }

  incrementCounter(counter:number, onStock:number){
    if(counter < onStock){
      this.counter++;
    }else{
      this.counter == onStock;
    }
    
  } 

  decrementCounter(counter:number, onStock:number){
    this.counter--;
  }
}
