// const env  = require("../../../environment")();

export default class path {
    
    // static environment = env.client;
    static baseUrl = "http://localhost:7000/";

    //authentication URL
    static SIGNUP = path.baseUrl + "api/user/signup";
    static LOGIN = path.baseUrl + "api/signin";
    static PROCESS = path.baseUrl + "api/process";
    static DESIGNER_TEMPLATE = path.baseUrl + "api/template";
    static DESIGNER_VIEW_TEMPLATE = path.baseUrl + "api/designerview";
    static PROCESSTEMPLATE = path.baseUrl + "api/processtemplate/all";
}