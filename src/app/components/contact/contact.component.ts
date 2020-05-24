import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  backgroundPictures: string[]; 
  index = 0;
  currentBackground: string;


  constructor(private sanitizer: DomSanitizer) {
    this.backgroundPictures = [
      "https://i.imgur.com/mhXCNuv.png?1",
      "https://i.imgur.com/sTUl4wU.png?2",
      "https://i.imgur.com/DEEoOf2.png?1"
    ]
    this.currentBackground = this.backgroundPictures[this.index];
   }

  ngOnInit(): void {
    setInterval(() => {
      this.index = ++this.index % this.backgroundPictures.length;
      this.currentBackground = this.backgroundPictures[this.index];
      this.getBackgroundUrl();
      }, 5000);
  }

  getBackgroundUrl() {
    return 'url(' + this.currentBackground + ')';
  }
}
