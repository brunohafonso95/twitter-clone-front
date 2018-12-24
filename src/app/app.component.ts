import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  // icons
  faTwitter = faTwitter;
  @ViewChild('splash') splash: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    setTimeout(() => {
      this.renderer.setStyle(this.splash.nativeElement, 'height', '0%');
    }, 1500);
  }
}
