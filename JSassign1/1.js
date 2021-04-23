// problem 1 
function same(a , b){
    return Object.keys(b).every(key => key in a && b[key] === a[key])
}

// because first one have every property from second obejct, so return true
console.log(same({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); 
// because the second object has age but first one does have it, so return false
console.log(same({ hair: 'long', beard: true }, {age: 25, hair: 'long', beard: true })); 



//Problem 3 and Probelm 4
let csv = "h1,h2,h3\nc1,c2,c3\nd1,d2,d3"

function to2d(content, sep, first){
    var copy = content;
    if(!first){
        copy = copy.slice(copy.indexOf('\n')+1);
    }
    return copy.split('\n').map(x => x.split(sep));
}

console.log(to2d(csv, ',', false));


//problem 5
let toCsvWithCol = (content, col) => [col.join(','),...content.map(obj => col.reduce((acc, key) => `${acc}${!acc ? '' : ','}"${!obj[key] ? '' : obj[key]}"`, ''))].join('/n');

json = [{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }]

console.log(toCsvWithCol(json, ['x', 'y']));

//problem 6
let findVal = (json, key) => {
    if(key in json){
        return json[key];
    }else{
        return Object.values(json).reduce((acc,val)=>{
            if(acc != null){
                return acc;
            }if(typeof val == 'object'){
                return findVal(val, key);
            }
        }, undefined);
    }
}


json = [{ x: 100, y: 200 }, { x: 300, y: 400, z: {h:20} }];

console.log(findVal(json, 'h'));


// problem 7
let numToArray = num => [...`${num}`].map(x => parseInt(x));

console.log(numToArray(123));


// problem 8
let filter = function(list, vals){
    var set = new Set(vals);
    return list.reduce((acc, cur)=>{
        if(!set.has(cur)){
            acc.push(cur);
        }
        return acc;
    },[]);
}

let ls = [0,1,2,2,3,3,4,5,6,7,8];
console.log(filter(ls, [2,3]));

//problem 9
let powerset = arr =>{
    return arr.reduce((acc, cur)=>{
        return acc.concat( acc.map( r=> r.concat([cur])  ) );
    },[[]])   ;
}

console.log(powerset([1,2,3]))


//problem 10
let findValues = (arr, vals)=>{
    let set = new Set(vals);
    let res = [];
    for(let i = 0; i < arr.length; i++){
        if(set.has(i)){
            res.push(arr[i]);
        }
    }
    return res;
}

console.log(findValues(['a','b','c','d','e'], [0,2,3]));


//problem 11
let removeBadchar = (str) => {
    if(str == null || str == ' ') return str;
    str = str.toString();
    return str.replace(/[^\x20-\x7e]/g,'');
}

console.log(removeBadchar('äÄçÇéÉêPHP-MySQLöÖÐþúÚ'));

