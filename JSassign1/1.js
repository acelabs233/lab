

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

//problem
let randomColor = ()=>{

    let ls = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    let color ='#';
    for(let i = 0; i < 6; i++){
        let idx = Math.floor(Math.random() * 14);
        color += ls[idx];
    } 
    return color;
}

const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };

console.log(randomColor(), random_hex_color_code());

//problem 12

let removeBadchar = (str) => {
    if(str == null || str == ' ') return str;
    str = str.toString();
    return str.replace(/[^\x20-\x7e]/g,'');
}

console.log(removeBadchar('äÄçÇéÉêPHP-MySQLöÖÐþúÚ'));

//problem 13

let byteSize = str => {
    let size = 0;
    for(let i = 0; i < str.length; i ++){
        if(str.charCodeAt(i) > 0x80){
            size ++;
        }
        size ++;
    }
    return size;
}

console.log(byteSize("hi"));
console.log(byteSize("Ã¢"));
console.log(byteSize("123456"));
console.log("problem 14 end\n");

//problem 14
const replaceKey = (keysMap, obj) =>
  Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,  [keysMap[key] || key]: obj[key]
    }),
    {}
  );

const obj = { name: 'Bobo', job: 'Programmer', shoeSize: 100 };
let result = replaceKey({ name: 'firstName', job: 'Actor' }, obj);
console.log(result);


//problem 15
const reduce_Which = (arr, comparator = (a, b) => a - b) =>{
  return arr.reduce((a, b) => (comparator(a, b) >= 0 ? b : a))
};
console.log(reduce_Which([10, 30, 20], (a, b) => a - b));  


//problem 16

const all = (arr, fn = Boolean) => arr.every(fn);
console.log(all([4, -1, 3], x => x > 1)); 
console.log(all([4, 2, 3], x => x < 1));
console.log(all([1, 2, 3])); 


//problem 17

let split = (arr, fn) => {
    return arr.reduce((acc, val, idx)=>{
        if(fn[idx]){
            acc[0].push(val);
        }else{
            acc[1].push(val);
        }
        return acc;
    }, [[],[]]);
}

console.log(split([1, 2, 3, 4], [true, true, false, true]));



