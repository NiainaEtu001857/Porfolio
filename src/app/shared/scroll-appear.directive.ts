import { AfterViewInit, Directive, ElementRef, OnDestroy, inject, input } from '@angular/core';

/** Convertit la valeur de l'attribut en millisecondes (attribut nu => 0). */
const toDelay = (value: unknown) => Number(value) || 0;

/**
 * Ajoute la classe `vis` quand l'élément entre dans le viewport, ce qui
 * déclenche les transitions définies par `.sa` / `.tl-item`.
 *
 * Usage : `<div class="sa" appScrollAppear>` ou, pour un effet cascade,
 * `<div class="tl-item" [appScrollAppear]="$index * 120">`.
 */
@Directive({ selector: '[appScrollAppear]' })
export class ScrollAppear implements AfterViewInit, OnDestroy {
  /** Retard avant l'apparition, en millisecondes. */
  readonly delay = input(0, { alias: 'appScrollAppear', transform: toDelay });
  readonly threshold = input(0.07, { alias: 'scrollAppearThreshold' });

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer?: IntersectionObserver;
  private timer?: ReturnType<typeof setTimeout>;

  ngAfterViewInit(): void {
    const element = this.host.nativeElement;

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        // Une seule apparition : on arrête d'observer dès le premier passage.
        this.observer?.disconnect();
        this.timer = setTimeout(() => element.classList.add('vis'), this.delay());
      },
      { threshold: this.threshold() },
    );

    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    clearTimeout(this.timer);
  }
}
