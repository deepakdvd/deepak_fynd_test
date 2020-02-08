import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'test';
  public selectedImg: any = {};
  public imgArr: any = [
    {
       "name":"Sports",
       "image_url":"https://dummyimage.com/600x401/000/fff"
    },
    {
       "name":"Abstract",
       "image_url":"https://dummyimage.com/600x402/000/fff"
    },
    {
       "name":"Animals",
       "image_url":"https://dummyimage.com/600x403/000/fff"
    },
    {
       "name":"Business",
       "image_url":"https://dummyimage.com/600x404/000/fff"
    },
    {
       "name":"Cats",
       "image_url":"https://dummyimage.com/600x405/000/fff"
    },
    {
       "name":"Nightlife",
       "image_url":"https://dummyimage.com/600x406/000/fff"
    },
    {
       "name":"Fashion",
       "image_url":"https://dummyimage.com/600x407/000/fff"
    }
 ];
 public url: any = '';

 constructor() { }

 ngOnInit() {
}

currentSelectedImg(img: any, index: any) {
  this.selectedImg.image_url = img;
  this.selectedImg.index = index;
}

onSelectFile(event: any) { // called each time file input changes
  if (event.target.files && event.target.files[0]) {
    var reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]); // read file as data url
    reader.onload = (event) => { // called once readAsDataURL is completed
      this.url = event.target.result;
    }
  }
}

uploadImage() {
  this.imgArr[this.selectedImg.index].image_url = this.url;
}

}
