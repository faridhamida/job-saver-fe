export function baseApi() {
    const ENV = {
      development: "https://job-saver-be.herokuapp.com/",
      staging: "https://job-saver-be.herokuapp.com/",
      production: "https://job-saver-be.herokuapp.com/"
    };
    return ENV[process.env.NODE_ENV];
}
