// Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
// const firstParagraph = document.querySelector("p")
// console.log(firstParagraph.textcontent)


// // Get each of the the paragraph using document.querySelector('#id') and by their id
// const secondParagraph = document.querySelector('#secondParagraph')
// const thirdParagraph = document.querySelector('#thirdParagraph')
// const fourthParagraph = document.querySelector('#fourthParagraph')


// Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
// const allParagraphs = document.querySelectorAll("p")


// Loop through the nodeList and get the text content of each paragraph
const allParagraphs = document.querySelectorAll('p')
// paragraph.forEach(paragraph => {
//     console.log(paragraph.textContent)
// })


// // Set a text content to paragraph the fourth paragraph,Fourth Paragraph
// paragraph[3].textContent = 'fourth paragraph'


// // Set id and class attribute for all the paragraphs using different attribute setting methods
// paragraph.forEach((paragraph, index) => {
//     paragraph.id = `paragraph${index+1}`;
//     paragraph.className = `paragraphClass`
// })

// Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
allParagraphs.forEach((paragraph,i)=>{
    // paragraph.style.color = "orange";
    paragraph.style.backgroundColor = "Yellow";
    paragraph.style.fontfamily = "Times New Roman"
    paragraph.style.fontsize = "14 px"
    paragraph.style.border = "solid black 4px"
    if (i%2===0){
        paragraph.style.color = "red";
    }else{            
        paragraph.style.color = "green"
    }
})
// Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color


// Set text content, id and class to each paragraph
allParagraphs.forEach((paragraph, index) => {
    paragraph.id = `paragraph${index + 1}`;
    paragraph.className = `paragraph-class`;
});
console.log(allParagraphs)