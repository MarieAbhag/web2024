
// ----------------------------------------------callback-------------------------------------------
function walkDog(callback){
    // setTimeout(callback, 1500);
    setTimeout(() => {
        console.log("yoyu walk the dog");
        callback();
    }, 1500);

}
function cleanKitchen(callback){
    setTimeout(()=>{
        console.log("you clean the kitchen")
        callback()
    },2500)
}
function takeOutTrash(callback){
    setTimeout(()=>{
        console.log("you take out the trash")
        callback()
    },500)
}
walkDog(()=>{
    cleanKitchen(()=> {
        takeOutTrash(()=> console.log("you finish all the chores"))
    });
})
// -------------------------------mit Promise .then-------------------------
function walkDog(){
   
    return new Promise((resolve, reject)=>{
   
    setTimeout(() => {
        resolve("you walk the dog");
     
    }, 1500);
        
    });

}
function cleanKitchen(callback){
    
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve("you clean the kitchen")
            callback()
        },2500)

    })
}
function takeOutTrash(){
    
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("you take out the trash")
           
        },500)

    })

}
walkDog().then(value => {console.log(value); return cleanKitchen()})
    .then(value => {console.log(value); return takeOutTrash()})
    .then(value => {console.log(value);console.log("you finnished all the chores")})
// -------------------------------mit a sync Promise await -------------------------
 function walkDog(){
   
    return new Promise((resolve, reject)=>{
   
    setTimeout(() => {
        const dogWalked = true;

        if (dogWalked) {
            resolve("you walk the dog");
            
        } else {
            reject("You didnot walk the dog")
            
        }
     
    }, 1500);
        
    });

}
function cleanKitchen(callback){
    
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            const kitchencleaned = true;

            if (kitchencleaned ) {
                resolve("you cleaned the kitchen");
                
            } else {
                reject("You didnot clean the kitchen")
                
            }
        },2500)

    })
}
function takeOutTrash(){
    
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const takedOutTrash = false;

            if (takedOutTrash) {
                resolve("you taked the Trash");
                
            } else {
                reject("You didnot take out thetrash")
                
            }
           
        },500)

    })

}
walkDog().then(value => {console.log(value); return cleanKitchen()})
    .then(value => {console.log(value); return takeOutTrash()})
    .then(value => {console.log(value);console.log("you finnished all the chores")})
    .catch(error => console.error(error));