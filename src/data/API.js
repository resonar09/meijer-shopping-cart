class API {

 //Get fetch wrapper
  static async get() {
    return await this.jsonMethod("get", "https://meijerdigital.azurewebsites.net/api/interview", null);
  }

  static async jsonMethod(method, path) {
    let request = {
      method: method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(path, request);
    const json = await response.json();

    return json;
  }
}

export default API;