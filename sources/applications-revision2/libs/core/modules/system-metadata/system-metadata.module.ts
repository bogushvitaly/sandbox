import { NgModule } from "@angular/core";
import { MetaLoader, MetaModule, MetaStaticLoader } from "@ngx-meta/core";
import { TranslateService } from "@ngx-translate/core";

export function metaFactory(translate: TranslateService): MetaLoader {
  return new MetaStaticLoader();
}
@NgModule({
  imports: [
    MetaModule.forRoot({
      provide: MetaLoader,
      useFactory: metaFactory,
      deps: [TranslateService]
    })
  ]
})
export class SystemMetadataModule {}
