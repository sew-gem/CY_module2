function copy(object) {
    const newObj = Array.isArray(object) ? [] : {};
    const keys = Object.keys(object);   //retrieve value
    keys.forEach((key) => {
        //assign value
       newObj[key] = object[key];   
    });
    return newObj;
 }
 
 const object = {
    name: "sew",
    hobby: {
        food: "cream",
        sport: ["skateboard", "running", "basketball"]
    },
    arr: [6, 7, 8]
 };
 console.log(copy(object));