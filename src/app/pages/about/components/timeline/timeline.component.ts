import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="timeline-section">
      <div class="container">
        <h2 class="section-title">Our Journey</h2>
        
        <div class="timeline">
          <div class="line"></div>
          
          <div 
            *ngFor="let event of events; let i = index" 
            class="event"
            [class.right]="i % 2 === 1"
          >
            <div class="event-content">
              <div class="year">{{event.year}}</div>
              <h3>{{event.title}}</h3>
              <p>{{event.description}}</p>
            </div>
            <div class="dot"></div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .timeline-section {
      padding: 6rem 2rem;
      position: relative;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .section-title {
      text-align: center;
      color: white;
      font-size: 2.5rem;
      margin-bottom: 4rem;
      background: linear-gradient(120deg, #fff, #a0aec0);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .timeline {
      position: relative;
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem 0;
    }

    .line {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 2px;
      height: 100%;
      background: linear-gradient(180deg, 
        rgba(33, 150, 243, 0.3),
        rgba(33, 212, 253, 0.3)
      );
    }

    .event {
      position: relative;
      margin-bottom: 4rem;
      width: 45%;
      opacity: 0;
      transform: translateX(-50px);
      animation: slideIn 0.5s ease forwards;
    }

    .event.right {
      margin-left: auto;
      transform: translateX(50px);
    }

    .event-content {
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 16px;
      padding: 1.5rem;
      position: relative;
      transition: all 0.3s ease;
    }

    .event-content:hover {
      transform: translateY(-5px);
      border-color: rgba(33, 150, 243, 0.3);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }

    .year {
      color: #2196f3;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    h3 {
      color: white;
      margin-bottom: 0.5rem;
    }

    p {
      color: #a0aec0;
      line-height: 1.6;
    }

    .dot {
      position: absolute;
      top: 50%;
      width: 16px;
      height: 16px;
      background: #2196f3;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      left: calc(100% + 2rem);
    }

    .event.right .dot {
      right: calc(100% + 2rem);
      left: auto;
      transform: translate(50%, -50%);
    }

    @keyframes slideIn {
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @media (max-width: 768px) {
      .timeline-section {
        padding: 4rem 1rem;
      }

      .line {
        left: 0;
      }

      .event {
        width: calc(100% - 3rem);
        margin-left: 3rem;
      }

      .event.right {
        margin-left: 3rem;
      }

      .dot {
        left: -2rem;
      }

      .event.right .dot {
        left: -2rem;
        right: auto;
        transform: translate(-50%, -50%);
      }
    }
  `]
})
export class TimelineComponent implements OnInit {
  events: TimelineEvent[] = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'CXAI was founded with a vision to revolutionize customer experience through AI.'
    },
    {
      year: '2020',
      title: 'First Major Release',
      description: 'Launched our core AI-powered analytics platform, serving our first enterprise clients.'
    },
    {
      year: '2021',
      title: 'Global Expansion',
      description: 'Expanded operations to Europe and Asia, growing our team to 50+ members.'
    },
    {
      year: '2022',
      title: 'Advanced AI Integration',
      description: 'Introduced breakthrough emotion AI and predictive analytics features.'
    },
    {
      year: '2023',
      title: 'Industry Recognition',
      description: 'Named as industry leader in CX Analytics by major research firms.'
    }
  ];

  ngOnInit() {
    this.animateTimelineOnScroll();
  }

  private animateTimelineOnScroll() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.event').forEach(event => {
      observer.observe(event);
    });
  }
}