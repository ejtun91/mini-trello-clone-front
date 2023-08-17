import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { slideAnimation } from '../../../shared/animations/slide.animation';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  animations: [slideAnimation],
  host: {
    '(window:resize)': 'onWindowResize($event)',
  },
})
export class HomeComponent implements OnInit, OnDestroy {
  isLoggedInSubscription: Subscription | undefined;
  items = [{ title: 'Slide 1' }, { title: 'Slide 2' }, { title: 'Slide 3' }];
  currentIndex = 0;
  currentTestimonialIndex = 0;
  width: number = window.innerWidth;
  mobileWidth: number = 768;
  isMobile: boolean = false;
  @ViewChild('scrollDivContainer') private scrollDivContainer?: ElementRef;

  slides = [
    { image: 'assets/Carousel_Image_Boards_2x.png', description: 'Image 00' },
    { image: 'assets/Carousel_Image_Lists_2x.png', description: 'Image 01' },
    { image: 'assets/Carousel_Image_Cards_2x.png', description: 'Image 02' },
  ];
  slidesTestimonial = [
    {
      description:
        '[Trello is] great for simplifying complex processes. As a manager, I can chunk [processes] down into bite-sized pieces for my team and then delegate that out, but still keep a bird"s-eye view.',
      info: '75% of organizations report that Trello delivers value to their business within 30 days.',
      author: 'Joey Rosenberg',
      authorInfo: 'Global Leadership Director at Women Who Code',
    },
    {
      description:
        'Whether someone is in the office, working from home, or working on-site with a client, everyone can share context and information through Trello.',
      info: '81% of customers chose Trello for its ease of use.',
      author: 'Sumeet Moghe',
      authorInfo: 'Product Manager at ThoughtWorks',
    },
    {
      description:
        'We used Trello to provide clarity on steps, requirements, and procedures. This was exceptional when communicating with teams that had deep cultural and language differences.',
      info: '74% of customers say Trello has improved communication with their co-workers and teams.',
      author: 'Jefferson Scomacao',
      authorInfo: 'Development Manager at IKEA/PTC',
    },
  ];
  constructor(private authService: AuthService, private router: Router) {}
  ngOnDestroy(): void {
    this.isLoggedInSubscription?.unsubscribe();
  }

  ngOnInit() {
    this.authService.isLogged$.subscribe((isLoggedIn) => {
      if (isLoggedIn) this.router.navigateByUrl('/boards');
    });
    this.preloadImages();
    this.isMobile = this.width < this.mobileWidth;
  }

  preloadImages() {
    this.slides.forEach((slide) => {
      new Image().src = slide.image;
    });
  }

  setCurrentSlideIndex(index: number) {
    this.currentIndex = index;
  }

  isCurrentSlideIndex(index: number) {
    return this.currentIndex === index;
  }

  isCurrentSlideTestimonialIndex(index: number) {
    return this.currentTestimonialIndex === index;
  }

  setCurrentTestimonialSlideIndex(index: number) {
    this.currentTestimonialIndex = index;
  }

  nextSlide() {
    this.currentTestimonialIndex =
      this.currentTestimonialIndex < this.slidesTestimonial.length - 1
        ? ++this.currentTestimonialIndex
        : 0;
  }

  prevSlide() {
    this.currentTestimonialIndex =
      this.currentTestimonialIndex > 0
        ? --this.currentTestimonialIndex
        : this.slidesTestimonial.length - 1;
  }

  scrollDiv(direction: string): void {
    const scrollWidth = (this.scrollDivContainer!.nativeElement as HTMLElement)
      .scrollWidth;
    if (direction == 'right') {
      if (this.isMobile)
        (
          this.scrollDivContainer!.nativeElement as HTMLElement
        ).scrollLeft += 380;
      else
        (this.scrollDivContainer!.nativeElement as HTMLElement).scrollLeft +=
          scrollWidth;
    } else {
      if (this.isMobile)
        (
          this.scrollDivContainer!.nativeElement as HTMLElement
        ).scrollLeft -= 380;
      else
        (this.scrollDivContainer!.nativeElement as HTMLElement).scrollLeft = 0;
    }
  }

  onWindowResize(event: any) {
    this.width = event.target.innerWidth;
    this.isMobile = this.width < this.mobileWidth;
  }

  activeSlide(index: number) {
    this.currentIndex = index;
  }
}
