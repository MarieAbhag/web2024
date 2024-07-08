setTimeout(function(){
    console.log('gewartet');
},1000);

setTimeout(() => {
    console.log('gewartet');
},1000);

function asyncFunction(callbackFunction) {
    console.log('vor callback');
    callbackFunction();
    console.log('nachCallback');
}

function callbackFunction(){{
    console.log('aufrufCallback');
}}

asyncFunction(callbackFunction);

xhr.addEventListener('readystatechange',(url) => {
    const xhr2 = new XMLHttpRequest( url2 );
    xhr2.addEventListener('readystatechange'), (url2) => {
        const xhr3 = new XMLHttpRequest(url3);
        xhr3.addEventListener('readystatechange', (url3) => {
    
        });
}

asyncFunction(
        (error, result) => {
            // weiterer Code
            asyncFunction2(
                // weiterer Code
                (error2, result2) => {
                    // weiterer Code
                    asyncFunction3(
                    (error3, result3) => {
                        // weiterer Code
                        asyncFunction4(
                        (error4, result4) => {
                                // weiterer Code
                                asyncFunction5(
                                  (error5, result5) => {
                                // weiterer Code
                                }
                          );
                      }
                      );
                    }
                );
               }
             );
            }
          );


          um diese pyramid of doom zu vermeiden nutzt man 
          sogenannte promises

          let p = new Promise(function(resolve,reject){
            if(alle aufgaben erfüllt){
                resolve();
            }else{
                reject(err);
            }
          })