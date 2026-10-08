import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  DestroyRef,
  inject,
  signal,
} from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { NAV_ITEMS, UI_LABELS } from '../../core/portfolio.data';
import { BrandMark } from '../../shared/brand-mark/brand-mark';

/** Barre de navigation fixe : ancres, scroll-spy, bascule FR/EN et menu mobile. */
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BrandMark],
})
export class Navbar {
  protected readonly items = NAV_ITEMS;
  protected readonly labels = UI_LABELS;

  private readonly document = inject(DOCUMENT);
  protected readonly language = inject(LanguageService);

  protected readonly lang = this.language.lang;
  protected readonly menuOpen = signal(false);
  protected readonly activeId = signal(this.items[0].id);
  /** Vrai dès qu'on a quitté le haut de page : la barre passe en verre dépoli. */
  protected readonly scrolled = signal(false);

  private sections?: HTMLElement[];

  constructor() {
    const view = this.document.defaultView;
    if (!view) return;

    // Écouteur hors Angular : le scroll ne déclenche de détection de
    // changement que lorsque la section active change réellement.
    let scheduled = false;
    const onScroll = () => {
      if (scheduled) return;
      scheduled = true;
      view.requestAnimationFrame(() => {
        scheduled = false;
        this.updateScrollState(view.scrollY);
        this.updateActiveSection(view.scrollY);
      });
    };

    view.addEventListener('scroll', onScroll, { passive: true });
    inject(DestroyRef).onDestroy(() => view.removeEventListener('scroll', onScroll));
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  private updateScrollState(scrollY: number): void {
    this.scrolled.set(scrollY > 12);
  }

  /** Surligne le lien de la dernière section dont le haut est passé sous la barre. */
  private updateActiveSection(scrollY: number): void {
    // Les sections ne bougent plus une fois la page rendue : on les retient.
    if (this.sections?.length !== this.items.length) {
      this.sections = this.items
        .map((item) => this.document.getElementById(item.id))
        .filter((section): section is HTMLElement => section !== null);
    }

    let active = this.items[0].id;
    for (const section of this.sections) {
      if (scrollY >= section.offsetTop - 150) {
        active = section.id;
      }
    }

    this.activeId.set(active);
  }
}
