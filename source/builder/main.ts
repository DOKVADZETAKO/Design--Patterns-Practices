import RequestBuilder from "./index"

let req = new RequestBuilder();
console.log(req.forUrl('asdasd').useMethod('sad').payload({ sss: "asdad" }).build());