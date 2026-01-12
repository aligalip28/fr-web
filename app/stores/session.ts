import { defineStore } from "pinia";
interface SessionState {
  token: string | null;
  name: string | null;
  surname: string | null;
  email: string | null;
  gsm: string | null;
  gsmCountryCode: string | null;
}

export const useSessionStore = defineStore("session", {
  state: (): SessionState => {
    // useCookie hem server hem client tarafında çalışır
    const token = useCookie('session-token');
    const name = useCookie('session-name');
    const surname = useCookie('session-surname');
    const email = useCookie('session-email');
    const gsm = useCookie('session-gsm');
    const gsmcc = useCookie('session-gsmcc');

    return {
      token: token.value || null,
      name: name.value || null,
      surname: surname.value || null,
      email: email.value || null,
      gsm: gsm.value || null,
      gsmCountryCode: gsmcc.value || null,
    };
  },

  actions: {
    startSession(data: any): void {
      // State güncelleme
      this.token = data.t;
      this.name = data.n;
      this.surname = data.s;
      this.email = data.e;
      this.gsm = data.gsm;
      this.gsmCountryCode = data.gsmcc;

      // Çerezleri güncelleme (Tarayıcı kapandığında silinmemesi için maxAge eklenebilir)
      const config = { maxAge: 60 * 60 * 24 * 7 }; // 1 hafta
      useCookie('session-token', config).value = data.t;
      useCookie('session-name', config).value = data.n;
      useCookie('session-surname', config).value = data.s;
      useCookie('session-email', config).value = data.e;
      useCookie('session-gsm', config).value = data.gsm;
      useCookie('session-gsmcc', config).value = data.gsmcc;
    },

    endSession(): void {
      // State'i sıfırla
      this.$reset();

      // Çerezleri temizle
      useCookie('session-token').value = null;
      useCookie('session-name').value = null;
      useCookie('session-surname').value = null;
      useCookie('session-email').value = null;
      useCookie('session-gsm').value = null;
      useCookie('session-gsmcc').value = null;

      if (typeof window !== 'undefined') {
        window.location.replace(`/`);
      }
    },

    sessionExists(): boolean {
      return !!this.token;
    },

    async doLogin(emailOrGSM: string, password: string, locale: string) {
      const result = await accountService.login(emailOrGSM, password, locale);
      if (result.isSuccess()) {
        this.startSession(result.ro);
      }
      return result;
    },

    async doSocialLogin(params: any) {
      const result = await accountService.socialSignIn(
        params.name, params.surname, params.email, 
        params.token, params.socialId, params.platform, params.locale
      );
      if (result?.isSuccess()) {
        this.startSession(result.ro);
      }
      return result;
    },

    async doLogout(locale: string) {
      const result = await accountService.logout(locale);
      if (result.isSuccess()) {
        this.endSession();
      }
      return result;
    }
  },
});