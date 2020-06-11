const data = [{
    title: "Think Global Entreprenuer",
    description: 'In this program, you will work in a small startup firm. which will help you learn the business <span id="first_dots">...</span><span id="first_more">at the very beginning stage. This will help in your career development if you want to be an Entrepreneur in near future. This program will allow building your network in the Industry.</br> Countries: US, Canada, Australia, Singapore, China, India, Dubai.</br> Duration of this Internship: 4-6 months.</br> Pay: $200-$400 per week.</p></span> <p onclick="first_click()" id="firstRead">Read more',
    image: "images/pen.png"
  },
  {
    title: "Academia Internship",
    description: 'If you are in your final year of studies, and are looking for an internship to complete your<span id="second_dots">...</span><span id="second_more"> final year report then this program is best suited for you. This will give industry experience into your chosen field of studies.This program will serve the combination of work culture and professional development that will count as an experience in your future next job.</br> Countries: US, Canada, Australia, Singapore, China, India, Dubai.</br> Duration of this Internship: 3 months.</br> Pay: $300 per week.</p></span> <p onclick="second_click()" id="secondRead">Read more',
    image: "images/diploma.png"
  },
  {
    title: "Talent Internship",
    description: "Now you have qualifications but do not have the experience to work in the studied filed. This program will allow you to be a <span id='third_dots'>...</span><span id='third_more'>part of the biggest firm, where you will learn the experience needed to work in the industry. This is a very popular program as its mutual profit i.e. A young graduate gets the first-hand experience and the Company gets valuable insight into your country's market. This will help the business to adapt to the new market quickly.</br> Countries: US, Canada, Australia, Singapore, China, India, Dubai.</br> Duration of this Internship: 6 months.</br> Pay: $350 per week.</p></span> <p onclick='third_click()' id='thirdRead'>Read more",
    image: "images/art2.jpg"
  },
  {
    title: "Project Internship",
    description: 'This internship will allow you to work in real life short term project.In this, you will be assisting your <span id="fourth_dots">...</span><span id="fourth_more">project manager and your team member in every way possible.This is the best chance for any individual to be a part of a real-life project and apply their theoretical knowledge into practical use.</br> Countries: US, Canada, Australia, Singapore, China, India, Dubai.</br> Duration of this Internship: 6 months.</br> Pay: $350 per week.</p></span> <p onclick="fourth_click()" id="fourthRead">Read more',
    image: "images/art1.jpg"
  },
  {
    title: "Co-operative Education Internship",
    description: 'This program is a combination of classroom-based education with practical work experience. This will teach you all the work in the co-operative industry and making <span id="fifth_dots">...</span><span id="fifth_more">you ready for the job. The majority of people after joining this program gets the job offer letter once they finish their Internship. </br> Countries: US, Canada, Australia, Singapore, China, India, Dubai.</br> Duration of this Internship: 6 months.</br> Pay: $350 per week.</p></span> <p onclick="fifth_click()" id="fifthRead">Read more',
    image: "images/job.png"
  }
]


function createdataHTML(data) {
	
	let dataHtml = $("<div>");
	let heading = $("<h2>" + data.title +"</h2>");
	dataHtml.append(heading);
	
	let image = $("<img>",{src:data.image});
	dataHtml.append(image);
	
	let para = $("<p>" +data.description +"</p>")
	dataHtml.append(para);
	
	return dataHtml;
}

function displayData(datas) {
	let dataList = $("#programs");

	// Empty previous courses
	dataList.empty();
	let headingOne = $("<h1>" + "Our Programs"+ "</h1>")
	dataList.append(headingOne);
	for(let data of datas) {
		let HTML = createdataHTML(data);
		dataList.append(HTML);
	}
}

$(document).ready(function(){
	let main = [data[0], data[1]]; // Displaying Only two Object On homepage

	displayData(main);

});

function search() {
	
  let item = $("#searchText").val();
  item = item.toLowerCase().trim();
  let new_list = [];
  for (let i of data) {
    let dataTitle = i.title.toLowerCase()
    if (dataTitle.includes(item)) {
      new_list.push(i)
    }
  }
  displayData(new_list);
}





function first_click() {
  let first_dots = document.getElementById("first_dots");
  let first_more = document.getElementById("first_more");
  let firstRead = document.getElementById("firstRead");

  if (first_dots.style.display === "none") {
    first_dots.style.display = "inline";
    firstRead.innerHTML = "Read more";
    first_more.style.display = "none";
  } else {
    first_dots.style.display = "none";
    firstRead.innerHTML = "Show less";
    first_more.style.display = "inline";
  }
}

function second_click() {
  let second_dots = document.getElementById("second_dots");
  let second_more = document.getElementById("second_more");
  let secondRead = document.getElementById("secondRead");

  if (second_dots.style.display === "none") {
    second_dots.style.display = "inline";
    secondRead.innerHTML = "Read more";
    second_more.style.display = "none";
  } else {
    second_dots.style.display = "none";
    secondRead.innerHTML = "Show less";
    second_more.style.display = "inline";
  }
}

function third_click() {
  let third_dots = document.getElementById("third_dots");
  let third_more = document.getElementById("third_more");
  let thirdRead = document.getElementById("thirdRead");

  if (third_dots.style.display === "none") {
    third_dots.style.display = "inline";
    thirdRead.innerHTML = "Read more";
    third_more.style.display = "none";
  } else {
    third_dots.style.display = "none";
    thirdRead.innerHTML = "Show less";
    third_more.style.display = "inline";
  }
}

function fourth_click() {
  let fourth_dots = document.getElementById("fourth_dots");
  let fourth_more = document.getElementById("fourth_more");
  let fourthRead = document.getElementById("fourthRead");

  if (fourth_dots.style.display === "none") {
    fourth_dots.style.display = "inline";
    fourthRead.innerHTML = "Read more";
    fourth_more.style.display = "none";
  } else {
    fourth_dots.style.display = "none";
    fourthRead.innerHTML = "Show less";
    fourth_more.style.display = "inline";
  }
}

function fifth_click() {
  let fifth_dots = document.getElementById("fifth_dots");
  let fifth_more = document.getElementById("fifth_more");
  let fifthRead = document.getElementById("fifthRead");

  if (fifth_dots.style.display === "none") {
    fifth_dots.style.display = "inline";
    fifthRead.innerHTML = "Read more";
    fifth_more.style.display = "none";
  } else {
    fifth_dots.style.display = "none";
    fifthRead.innerHTML = "Show less";
    fifth_more.style.display = "inline";
  }
}
