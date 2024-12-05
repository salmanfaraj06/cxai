import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="partners">
      <h2 class="section-title">Integration Partners</h2>
      <div class="carousel-container">
        <div class="swiper" #swiper>
          <div class="swiper-wrapper">
            <div class="swiper-slide" *ngFor="let partner of partners">
              <div class="partner-logo">
                <img [src]="partner.logo" [alt]="partner.name" />
                <div class="partner-name">{{ partner.name }}</div>
              </div>
            </div>
          </div>
        </div>
        <button class="nav-button prev" #prevBtn>&lt;</button>
        <button class="nav-button next" #nextBtn>&gt;</button>
      </div>
    </section>
  `,
  styles: [`
    .partners {
      padding: 6rem 2rem;
      background: #0a0f1c;
      overflow: hidden;
    }

    .section-title {
      text-align: center;
      color: white;
      font-size: 2.5rem;
      margin-bottom: 4rem;
      font-weight: 700;
    }

    .carousel-container {
      position: relative;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 40px;
    }

    .swiper {
      width: 100%;
      padding: 20px 0;
    }

    .partner-logo {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      padding: 2rem;
      height: 120px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .partner-logo:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 20px rgba(33, 150, 243, 0.1);
    }

    .partner-logo img {
      height: 40px;
      width: auto;
      margin-bottom: 1rem;
      filter: brightness(0) invert(1) opacity(0.7);
      transition: filter 0.3s ease;
    }

    .partner-logo:hover img {
      filter: brightness(0) invert(1) opacity(1);
    }

    .partner-name {
      color: #a0aec0;
      font-size: 0.875rem;
      text-align: center;
    }

    .nav-button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: rgba(33, 150, 243, 0.1);
      border: 1px solid rgba(33, 150, 243, 0.2);
      color: #2196f3;
      font-size: 1.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
      z-index: 10;
    }

    .nav-button:hover {
      background: rgba(33, 150, 243, 0.2);
      border-color: rgba(33, 150, 243, 0.4);
    }

    .nav-button.prev {
      left: 0;
    }

    .nav-button.next {
      right: 0;
    }

    @media (max-width: 768px) {
      .partners {
        padding: 4rem 1rem;
      }

      .section-title {
        font-size: 2rem;
        margin-bottom: 3rem;
      }

      .carousel-container {
        padding: 0 30px;
      }
    }
  `]
})
export class PartnersComponent implements AfterViewInit {
  @ViewChild('swiper') swiperEl!: ElementRef;
  @ViewChild('prevBtn') prevBtn!: ElementRef;
  @ViewChild('nextBtn') nextBtn!: ElementRef;

  partners = [
    {
      name: 'Salesforce',
      logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/salesforce.svg'
    },
    {
      name: 'Zendesk',
      logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/zendesk.svg'
    },
    {
      name: 'HubSpot',
      logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/hubspot.svg'
    },
    {
      name: 'Slack',
      logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/slack.svg'
    },
    {
      name: 'Microsoft',
      logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/microsoft.svg'
    },
    {
      name: 'Intercom',
      logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/intercom.svg'
    },
    {
      name: 'Zoom',
      logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/zoom.svg'
    },
    {
      name: 'Shopify',
      logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/shopify.svg'
    }
  ];

  ngAfterViewInit() {
    const swiper = new Swiper(this.swiperEl.nativeElement, {
      modules: [Navigation, Autoplay],
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        prevEl: this.prevBtn.nativeElement,
        nextEl: this.nextBtn.nativeElement,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
    });
  }
}