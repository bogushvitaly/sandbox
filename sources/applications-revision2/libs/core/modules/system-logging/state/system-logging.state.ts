import { of } from "rxjs";
import { tap } from "rxjs/operators";

import { EmitterAction, Receiver } from "@ngxs-labs/emitter";
import { produce } from "@ngxs-labs/immer-adapter";
import { State, StateContext } from "@ngxs/store";

export interface SystemLoggingModel {}

@State<SystemLoggingModel>({
  name: "logging",
  defaults: {}
})
export class SystemLogging {
  constructor() {}

  @Receiver({ type: "[Logging] Application Browser Loaded" })
  static applicationBrowserLoaded(ctx: StateContext<SystemLoggingModel>) {
    produce(ctx, (draft: SystemLoggingModel) => {
      draft = draft;
    });
  }

  @Receiver({ type: "[Logging] Application Server Loaded" })
  static applicationServerLoaded(ctx: StateContext<SystemLoggingModel>) {
    produce(ctx, (draft: SystemLoggingModel) => {
      draft = draft;
    });
  }
}
