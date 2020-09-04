import { Component } from '@angular/core';

@Component({
  selector: 'app-affiliate-link',
  templateUrl:'./affiliate-link.component.html',
  styleUrls:['./affiliate-link.component.css']
})
export class AffiliateLinkComponent{

  newLink = 'https://smartckts.com/register/?affiliates=69';


  onCopyLink(inputElement: HTMLInputElement){
    console.dir(inputElement);
    inputElement.select();
    document.execCommand('copy');
    alert('Link copied');
  }
}

