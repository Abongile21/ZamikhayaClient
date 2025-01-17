
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/Auth/auth.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  currentSlide: number = 0;

  slides = [
    {
      title: 'WELCOME',
      subtitle: 'Are you ready to move?',
      image: 'assets/House searching-bro.png',
      description: 'Find <span>your township home</span> with us today.'
    },
    {
      title: 'EXPLORE',
      subtitle: 'Discover new places.',
      image: 'assets/New entries-amico (1).png',
      description: 'Explore the best townships around you.'
    },
    {
      title: 'CONNECT',
      subtitle: 'Join our community.',
      image: 'assets/Online friends-amico.png',
      description: 'Become part of our vibrant community.'
    }
  ];

  constructor(private router: Router,private authService: AuthService) {}

  skipIntro() {
    this.router.navigate(['/signin']);
  }

  nextSlide() {
    if (this.currentSlide < this.slides.length - 1) {
      this.currentSlide++;
    } else {
      this.router.navigate(['/signin']);
    }
  }
  ngOnInit():void {
    this.logout()
  }
 

  logout(): void{
    this.authService.logout()
  }
}
