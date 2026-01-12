import { toast } from "vue3-toastify";
export default class OperationResult {
  r: number = 0;
  ro: any;
  ec: number = 0;
  em: string = "";

  constructor(response: any) {
    if (response == null) {
      return this.newError();
    }
    if (!response.hasOwnProperty("r")) {
      return this.newError();
    }
    this.r = response.r;
    if (response.hasOwnProperty("ro")) {
      this.ro = response.ro;
    } else {
      this.ro = null;
    }
    if (response.hasOwnProperty("ec")) {
      this.ec = response.ec;
    } else {
      this.ec = 0;
    }
    if (response.hasOwnProperty("em")) {
      this.em = response.em;
    } else {
      this.em = "";
    }
  }

  toToast(): void {
    if (this.r === 1) {
      toast.warning(this.em);
    } else if (this.r === 2) {
      toast.error("operationresult.generalerror");
    } else if (this.r === 3) {
      toast.info("Authentication error");
    } else if (this.r === 4) {
      toast.info("Authorization error");
    }
  }

  newError(): this {
    this.r = 2;
    this.em = "operationresult.generalerror";
    this.ec = 0;
    this.ro = null;
    return this;
  }

  isSuccess(): boolean {
    return this.r === 0;
  }
}
