// from workaround:
// https://github.com/angular/angular-cli/issues/6373#issuecomment-319116889
import { NgModule } from '@angular/core';

// xplat
import { DemoHeroesModule } from '@application/web';

@NgModule({
  imports: [DemoHeroesModule]
})
export class DemoHeroesLoaderModule {}
