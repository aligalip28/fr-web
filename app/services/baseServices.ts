import OperationResult from "./operationResult";

const WS_URL = "http://localhost:42000/";

export default {
  async post(url: string, data: any) {
    const sessionStore = useSessionStore();
    let operationResult: OperationResult;

    try {
      const response = await $fetch<any>(WS_URL + url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Token": sessionStore.token || "",
        },
        body: data,
        
        onResponseError({ response }) {
          if (response.status === 401) {
            sessionStore.endSession();
          }
        }
      });

      operationResult = new OperationResult(response);
    } catch (e: any) {
      operationResult = new OperationResult(null).newError();
    }
    return operationResult;
  },

  async get(url: string) {
    const sessionStore = useSessionStore();
    let operationResult: OperationResult;

    try {
      const response = await $fetch<any>(WS_URL + url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Token": sessionStore.token || "",
        },
        
        onResponseError({ response }) {
          if (response.status === 401) {
            sessionStore.endSession();
          }
        }
      });

      operationResult = new OperationResult(response);
    } catch (e: any) {
      operationResult = new OperationResult(null).newError();
    }
    return operationResult;
  },
};