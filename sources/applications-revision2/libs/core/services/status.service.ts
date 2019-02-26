import { Inject, Injectable, Optional } from "@angular/core";
import { RESPONSE } from "@nguniversal/express-engine/tokens";

@Injectable({
  providedIn: "root"
})
export class StatusService {
  constructor(
    @Optional()
    @Inject(RESPONSE)
    private response: any
  ) {}

  setStatus(code: number, message: string): void {
    if (this.response) {
      this.response.statusCode = code;
      this.response.statusMessage = message;
    }
  }
}
