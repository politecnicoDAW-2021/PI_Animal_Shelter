import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  MatCarouselSlideComponent,
  Orientation
} from '@ngbmodule/material-carousel';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {
   public slidesList = new Array<never>(5);
  public showContent = false;

  public parentHeight = 'auto';
  public timings = '250ms ease-in';
  public autoplay = true;
  public interval = 5000;
  public loop = true;
  public hideArrows = false;
  public hideIndicators = false;
  public color: ThemePalette = 'accent';
  public maxWidth = 'auto';
  public maintainAspectRatio = true;
  public proportion = 25;
  public slideHeight = '200px';
  public slides = this.slidesList.length;
  public overlayColor = '#00000040';
  public hideOverlay = false;
  public useKeyboard = true;
  public useMouseWheel = true;
  public orientation: Orientation = 'ltr';
  public log: string[] = [];

  @ViewChildren(MatCarouselSlideComponent)
  public carouselSlides!: QueryList<
    MatCarouselSlideComponent
  >;
 
  public darkMode = false;

  constructor(
    private snackBar: MatSnackBar,
    private overlayContainer: OverlayContainer,
    private elementRef: ElementRef<HTMLElement>
  ) {}



  

  public onChange(index: number) {
    this.log.push(`MatCarousel#change emitted with index ${index}`);
  }
}
