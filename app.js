// const eHttp = new easyHttp();

/*
eHttp.get("https://jsonplaceholder.typicode.com/posts",
    function (err, response) {
        if (!err) {
            console.log(response);
        } else {
            console.log(err);
        }
    });

*/

/*
eHttp.post("https://jsonplaceholder.typicode.com/posts",
    {
        title: "in quibusdam tempore odit est dolorem",
        body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"

    }, function (err, response) {
        if (!err) {
            console.log(response);
        } else {
            console.log(err);
        }
    });

*/

/*
eHttp.put("https://jsonplaceholder.typicode.com/posts/5", {
    title: "in quibusdam tempore odit est dolorem",
    body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
}, function(err,response){

    (err) ? console.log(err):console.log(response);

});*/

/*
eHttp.delete("https://jsonplaceholder.typicode.com/posts/3",
function(err,response){
    if (!err) {
        console.log(response);
    } else {
        console.log(err);
    } 
});
console.log(eHttp);*/



const http = new EasyHttp();

http.getC("https://jsonplaceholder.typicode.com/users", function (err, res) {

    err ? console.log(err) : console.log(res);
});

http.get("https://jsonplaceholder.typicode.com/users")
    .then(json => console.log(json))
    .catch(err => console.log(err));

http.post("https://jsonplaceholder.typicode.com/users", {
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
})
    .then(json => console.log(json))
    .catch(err => console.log(err));

http.put("https://jsonplaceholder.typicode.com/users/10", {
    "name": "Leanne",
    "username": "Bret",
    "email": "Sincere@april.biz",
})
    .then(json => console.log(json))
    .catch(err => console.log(json));


http.delete("https://jsonplaceholder.typicode.com/users/8")
    .then(res => console.log(res))
    .catch(err => console.log(json));
