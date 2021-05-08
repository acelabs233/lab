const data = [25, 20, 10, 12, 15];

const svg = d3.select("#chart-area")
.append("svg")
.attr("width", "800")
.attr("height", "800");


const circles = svg.selectAll("circle")
                .data(data);

circles.enter().append("circle")
                .attr("cx", (d, i)=> (i *100)+200)
                .attr("cy", 200)
                .attr("r", (d,i)=> d * 2.5)
                .attr("fill","red");



// svg.append("circle")
//     .attr("cx", 100)
//     .attr("cy", 250)
//     .attr("r", 70)
//     .attr("fill","red");

// svg.append("line")
//     .attr("x1",10)
//     .attr("y1",20)
//     .attr("x2",50)
//     .attr("y2",50)
//     .attr("stroke","blue")
//     .attr("stroke-width",1)

// svg.append("rect")
//     .attr("x",60)
//     .attr("y",60)
//     .attr("height",20)
//     .attr("width",20)
//     .attr("fill","blue")

// svg.append("ellipse")
//     .attr("cx",100)
//     .attr("cy",100)
//     .attr("rx",20)
//     .attr("ry",30)
//     .attr("fill","blue")