class EasyHttp {


    // Using a callback to return 
    getC(url, callback) {
        fetch(url)
            .then(res => res.json())
            .then(json => callback(null, json))
            .catch(err => callback(`Error: ${err}`))
    }

    get(url) {
        return new Promise((resolve, reject) => {

            fetch(url)
                .then(res => res.json())
                .then(json => resolve(json))
                .catch(err => reject("Error"));

        })
    }


    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "POST",
                headers: new Headers(
                    {
                        'Content-type': 'application/json'
                    }
                ),
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(json => resolve(json))
                .catch(err => reject(err));
        })
    }

    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "PUT",
                headers: new Headers({ 'Content-type': 'application/json' }),
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(json => resolve(json))
                .catch(err => reject(err));
        });
    }



    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "DELETE"
            })
                .then(res => resolve("Successfully Deleted"))
                .catch(err => reject(err));
        })
    }


}