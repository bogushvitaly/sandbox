import { NgModule } from '@angular/core';
import { TransferHttpService } from '@gorniv/ngx-transfer-http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { CoreModule } from './core/core.module';
import { SharedModule } from './features/shared/shared.module';

@NgModule({
  imports: [CoreModule, SharedModule, AppRoutingModule],
  declarations: [AppComponent],
  providers: [TransferHttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
