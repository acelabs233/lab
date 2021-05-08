// d3.json("./data/ages.json")
//     .then(data=>{
//         data.forEach(d=>{
//             d.age = Number(d.age);
//         });
//         const svg = d3.select("#chart-area")
//         .append("svg")
//         .attr("width", "800")
//         .attr("height", "800");
    
//         const circles = svg.selectAll("circle")
//                 .data(data)
        
//         circles.enter().append("circle")
//         .attr("cx", (d, i)=> (i *100)+200)
//         .attr("cy", 200)
//         .attr("r", (d,i)=> d.age * 2.5)
//         .attr("fill", d=>{
//             if(d.name == "Tony"){
//                 return "blue"
//             }else{
//                 return "red"
//             }
//         });
            
// })


const svg = d3.select("#chart-area").append("svg")
  .attr("width", 400)
  .attr("height", 400);

d3.json("data/building.json").then(data => {
  data.forEach(d => {
    const y = d3.scaleLinear()
    .domain([0, 828])
    .range([0, 400])
    d.height = Number(y(d.height))
  })


//   console.log(y(828))

  const rects = svg.selectAll("rect")
    .data(data)
  
  rects.enter().append("rect")
    .attr("y", 0)
    .attr("x", (d, i) => (i * 60))
    .attr("width", 40)
    .attr("height", d => d.height)
    .attr("fill", "grey")
});
