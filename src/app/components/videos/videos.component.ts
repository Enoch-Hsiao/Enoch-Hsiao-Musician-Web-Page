import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  links: string[]; 
  index = 0;
  currentVid: string;

  constructor(private sanitizer: DomSanitizer) { 
    
    this.links = [
      "https://www.youtube.com/embed/5doKz_R97iU",
      "https://www.youtube.com/embed/gzmubSCAmAM",
      "https://www.youtube.com/embed/4LJnxjbLWYw",
      "https://www.youtube.com/embed/4Me_Voj14Q4"
    ]
    this.currentVid = this.links[this.index];
  }

  ngOnInit(): void {
  }

  left() {
    if(this.index == 0) {
      this.index = this.links.length - 1;
    } else {
      this.index--;
    }
    this.currentVid = this.links[this.index];
  }

  right() {
    this.index = ++this.index % this.links.length;
    this.currentVid = this.links[this.index];
  }

  getCurrentVid() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.currentVid);
  }
}
