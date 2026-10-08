import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { Slide } from '../../core/models';
import { UI_LABELS } from '../../core/portfolio.data';

const AUTOPLAY_MS = 3800;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
})
export class Carousel implements OnInit, OnDestroy {
  readonly slides = input.required<Slide[]>();
  /** Numéro affiché en surimpression (ex. « 03 »). */
  readonly number = input<string>();
  /** Lien externe affiché au survol de la carte. */
  readonly link = input<string>();

  protected readonly lang = inject(LanguageService).lang;
  protected readonly labels = UI_LABELS;
  protected readonly index = signal(0);
  protected readonly offset = computed(() => `translateX(-${this.index() * 100}%)`);

  private timer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.timer = setInterval(() => this.move(1), AUTOPLAY_MS);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  protected move(direction: 1 | -1): void {
    const count = this.slides().length;
    this.index.update((current) => (current + direction + count) % count);
  }

  protected goTo(index: number): void {
    this.index.set(index);
  }
}
