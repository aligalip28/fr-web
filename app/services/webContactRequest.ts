import baseService from "./baseServices";

export default {
  setWebContactRequestOnWeb: async function (
    userId: number,
    name: string,
    surname: string,
    email: string,
    phone: string,
    requestType: number,
    message: string
  ): Promise<any> {
    const { $i18n } = useNuxtApp();
    const locale = $i18n.locale.value;
    return await baseService.post(`${locale}/w/webcontactrequest`, {
      uid: userId,
      n: name,
      sn: surname,
      e: email,
      p: phone,
      rt: requestType,
      m: message,
    });
  },
};
