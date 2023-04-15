import { LayoutComponent } from "./layout/layout.component";
import { PokemonCardComponent } from "./pokemon-card/pokemon-card.component";
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { SectionLinkComponent } from "./section-link/section-link.component";
import { SpinnerComponent } from "./spinner/spinner.component";
import { StatusBarComponent } from "./status-bar/status-bar.component";
import { TypeBadgeIconComponent } from "./type-badge-icon/type-badge-icon.component";
import { TypeBadgeComponent } from "./type-badge/type-badge.component";
import { TypeTagComponent } from "./type-tag/type-tag.component";

export const SharedComponents: any = [
  LayoutComponent,
  SearchBarComponent,
  SectionLinkComponent,
  TypeTagComponent,
  TypeBadgeComponent,
  TypeBadgeIconComponent,
  PokemonCardComponent,
  SpinnerComponent,
  StatusBarComponent
]