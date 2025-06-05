function delay(ms) {
    return new Promise(
        function (resolve) {
            setTimeout(function () {
                resolve();
            }, ms)
        }
    )
}

delay(1000).then(
    function () {
        console.log("Done by 1 Sec");
    }
)

function returnNumber(ms) {
    return new Promise(
        function (resolve) {
            setTimeout(
                function () {
                    resolve("7");
                },ms
            )
        }
    )
}

returnNumber(2000).then(
    function (result) {
        console.log(result)
    }
)

function randomFail(ms) {
    return new Promise(
        function (resolve, reject) {
            setTimeout(
                function () {
                    if (Math.random() > 0.3) {
                        resolve("Success!");
                    }
                    else{
                        reject("Error!");
                    }
                }, ms
            )
        }
    )
}

randomFail(500)
.then(
    function (result) {
        console.log(result);
    }
)
.catch(
    function(error){
        console.log(error);
    }
);


function wait() {
    return new Promise(
        function (resolve) {
            setTimeout(
                function () {
                    console.log("Stage 1");
                    resolve();
                },1000
            );
        })
        .then(function () {
            return new Promise(
                function (resolve) {
                    setTimeout(
                        function () {
                            console.log("Stage 2!");
                            resolve("All stages completed!");
                }, 1500);
            });
    });
}

wait().then(
    function (result) {
        console.log(result);
    }
)