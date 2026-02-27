import { Component, signal, AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
import { faClipboardCheck, faTrophy, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.html',
  styleUrl: './numbers.scss',
  imports: [FontAwesomeModule],
})
export class Numbers implements AfterViewInit, OnDestroy {
  stats = signal([
    { label: 'Concursos finalizados', Icon: faTrophy, value: 500, display: 0 },
    { label: 'Concursos activos', Icon: faClipboardCheck, value: 80, display: 0 },
    { label: 'Utilizadores', Icon: faUserCheck, value: 1200, display: 0 },
  ]);

  private observer?: IntersectionObserver;
  private started = false;

  constructor(private host: ElementRef) {}

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !this.started) {
          this.started = true;
          this.animateCountUp(1200);
          this.observer?.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    this.observer.observe(this.host.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  private animateCountUp(duration: number) {
    const start = performance.now();
    const target = this.stats().map((s) => s.value);

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const next = this.stats().map((s, i) => ({
        ...s,
        display: Math.floor(target[i] * progress),
      }));
      this.stats.set(next);

      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }
}
