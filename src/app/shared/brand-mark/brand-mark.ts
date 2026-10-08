import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BRAND } from '../../core/portfolio.data';

/** Pastille d'initiales + nom, utilisée par la barre de nav et le pied de page. */
@Component({
  selector: 'app-brand-mark',
  templateUrl: './brand-mark.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandMark {
  /** Couleur du nom : foncée sur fond clair, blanche sur fond sombre. */
  readonly nameClass = input('text-ink');

  protected readonly brand = BRAND;
}
