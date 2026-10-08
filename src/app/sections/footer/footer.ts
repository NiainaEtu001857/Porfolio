import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BrandMark } from '../../shared/brand-mark/brand-mark';
import { LanguageService } from '../../core/language.service';
import { BRAND, FOOTER, NAV_ITEMS } from '../../core/portfolio.data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BrandMark],
})
export class Footer {
  protected readonly footer = FOOTER;
  protected readonly brand = BRAND;
  protected readonly items = NAV_ITEMS;
  protected readonly language = inject(LanguageService);
  protected readonly lang = this.language.lang;

  protected readonly tagline = {
    fr: 'Code propre, interfaces claires, livraison fiable.',
    en: 'Clean code, clear interfaces, reliable delivery.',
  };
  protected readonly backToTop = { fr: 'Haut de page', en: 'Back to top' };
}
