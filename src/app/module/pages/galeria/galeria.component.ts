import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements AfterViewInit {
  @ViewChild('sliderContent', { static: false }) sliderContent!: ElementRef;
  currentIndex = 1; // Comenzar en el primer slide visible
  slideCount: number = 0;
  slideWidth: number = 0;

  ngAfterViewInit() {
    const slides = this.sliderContent.nativeElement.children;
    this.slideCount = slides.length;
    this.slideWidth = slides[0].clientWidth;
    this.addCloneSlides();
    this.updateSlider();
  }

  moveSlide(step: number) {
    const newIndex = (this.currentIndex + step + this.slideCount) % this.slideCount;
    
    // Si estamos en el primer slide (clonado), saltar al último slide real
    if (this.currentIndex === 0 && step === -1) {
      this.sliderContent.nativeElement.style.transition = 'none';
      this.currentIndex = this.slideCount - 1;
      this.updateSlider();
      setTimeout(() => {
        this.sliderContent.nativeElement.style.transition = 'transform 0.5s ease-in-out';
        this.currentIndex = this.slideCount - 2;
        this.updateSlider();
      }, 50);
    } 
    // Si estamos en el último slide (clonado), saltar al primer slide real
    else if (this.currentIndex === this.slideCount - 1 && step === 1) {
      this.sliderContent.nativeElement.style.transition = 'none';
      this.currentIndex = 1;
      this.updateSlider();
      setTimeout(() => {
        this.sliderContent.nativeElement.style.transition = 'transform 0.5s ease-in-out';
        this.currentIndex = 2;
        this.updateSlider();
      }, 50);
    } 
    else {
      this.currentIndex = newIndex;
      this.updateSlider();
    }
  }

  updateSlider() {
    const offset = -this.currentIndex * this.slideWidth;
    this.sliderContent.nativeElement.style.transform = `translateX(${offset}px)`;
  }

  addCloneSlides() {
    const slides = this.sliderContent.nativeElement.children;
    const firstSlide = slides[0].cloneNode(true);
    const lastSlide = slides[slides.length - 1].cloneNode(true);

    this.sliderContent.nativeElement.appendChild(firstSlide);
    this.sliderContent.nativeElement.insertBefore(lastSlide, slides[0]);

    this.currentIndex = 1; // Iniciar en el primer slide real
  }
}
