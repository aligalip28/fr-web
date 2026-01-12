export default {
  login: async function (
    locale: string,
    emailOrGSM: string,
    password: string
  ): Promise<any> {
    return await baseServices.post(`${locale}/w/login`, {
      eog: emailOrGSM,
      p: password,
    });
  },
  register: async function (
    locale: string,
    userId: string,
    name: string,
    surname: string,
    email: string,
    emailApprovalCode: string,
    emailApprovalId: string,
    GSMCountryCode: string,
    GSM: string,
    GSMApprovalCode: string,
    GSMApprovalId: string,
    password: string,
    passwordAgain: string
  ): Promise<any> {
    return await baseServices.post(`${locale}/w/requestregister`, {
      uid: userId,
      n: name,
      s: surname,
      e: email,
      eac: emailApprovalCode,
      eaid: emailApprovalId,
      gsmc: GSMCountryCode,
      gsm: GSM,
      gsmac: GSMApprovalCode,
      gsmaid: GSMApprovalId,
      p: password,
      pa: passwordAgain,
    });
  },
  resendRegisterApprovalEmail: async function (
    locale: string,
    userId: string,
    email: string,
    name: string
  ): Promise<any> {
    return await baseServices.post(`${locale}/w/resendemailapproval`, {
      uid: userId,
      e: email,
      n: name,
    });
  },
  sendForgotPasswordApproval: async function (
    locale: string,
    emailOrGSM: string
  ): Promise<any> {
    return await baseServices.post(`${locale}/w/forgotpassword`, {
      eog: emailOrGSM,
    });
  },
  verifyPasswordReset: async function (
    locale: string,
    approvalCodeId: string,
    approvalCode: string
  ): Promise<any> {
    return await baseServices.post(`${locale}/w/verifypasswordreset`, {
      acid: approvalCodeId,
      ac: approvalCode,
    });
  },
  resetPassword: async function (
    locale: string,
    approvalCodeId: string,
    newPassword: string,
    newPasswordAgain: string
  ): Promise<any> {
    return await baseServices.post(`${locale}/w/resetpassword`, {
      acid: approvalCodeId,
      np: newPassword,
      npa: newPasswordAgain,
    });
  },
  getCredentials: async function (locale: string): Promise<any> {
    return await baseServices.get(`${locale}/w/getusercredentials`);
  },
  changePassword: async function (
    locale: string,
    currentPassword: string,
    newPassword: string,
    newPasswordAgain: string
  ): Promise<any> {
    return await baseServices.post(`${locale}/w/changepassword`, {
      cp: currentPassword,
      np: newPassword,
      npa: newPasswordAgain,
    });
  },
  logout: async function (locale: string): Promise<any> {
    return await baseServices.get(`${locale}/w/logout`);
  },
  getFavorites: async function (locale: string): Promise<any> {
    return await baseServices.get(`${locale}/w/getuserfavorites`);
  },
  getPermissions: async function (locale: string): Promise<any> {
    return await baseServices.post(`${locale}/w/getuserpermissions`, {
      p: 1,
    });
  },
  savePermission: async function (
    locale: string,
    userPermissionId: number,
    permissionId: number,
    value: boolean
  ): Promise<any> {
    return await baseServices.post(`${locale}/w/saveuserpermission`, {
      upid: userPermissionId,
      pid: permissionId,
      v: value,
    });
  },
  updateUser: async function (
    locale: string,
    name: string,
    surname: string,
    email: string,
    emailApprovalCode: string,
    emailApprovalId: string,
    GSMCountryCode: string,
    GSM: string,
    GSMApprovalCode: string,
    GSMApprovalId: string
  ): Promise<any> {
    return await baseServices.post(`${locale}/w/updateuser`, {
      n: name,
      s: surname,
      e: email,
      eac: emailApprovalCode,
      eaid: emailApprovalId,
      gsmc: GSMCountryCode,
      gsm: GSM,
      gsmac: GSMApprovalCode,
      gsmaid: GSMApprovalId,
    });
  },
  deleteUser: async function (
    locale: string,
    approvalCode: string,
    approvalCodeId: string
  ): Promise<any> {
    return await baseServices.post(`${locale}/w/deleteuser`, {
      ac: approvalCode,
      acid: approvalCodeId,
    });
  },
  setUserFavoriteBuilding: async function (
    locale: string,
    buildingId: number
  ): Promise<any> {
    return await baseServices.post(`${locale}/w/setuserfavorite`, {
      bid: buildingId,
      sid: 0,
    });
  },
  setUserFavoriteStone: async function (
    locale: string,
    stoneId: number
  ): Promise<any> {
    return await baseServices.post(`${locale}/w/setuserfavorite`, {
      bid: 0,
      sid: stoneId,
    });
  },
  socialSignIn: async function (
    name: string,
    surname: string,
    email: string,
    token: string,
    socialId: string,
    platform: number,
    locale: string
  ) {
    return await baseServices.post(`${locale}/w/socialsignin`, {
      sid: socialId,
      n: name,
      s: surname,
      e: email,
      t: token,
      p: platform,
    });
  },
  facebookLogin: async function (
    locale: string,
    accessToken: string
  ): Promise<any> {
    return await baseServices.post(`${locale}/w/facebooklogin`, {
      at: accessToken,
    });
  },
};
