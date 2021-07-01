function loadprojects() {
        
    for(let i=0;i<2;i++){
        var projectVideo=document.createElement("img");
        projectVideo.className="projectVideo";
        var projectTitle=document.createElement("p");
        projectTitle.className="projectTitle";
        var projectDescription=document.createElement("p");
        projectDescription.className="projectDescription";
        var projectCategories=document.createElement("p");
        projectCategories.className="projectCategories";
        var projectContent=document.createElement("p");
        projectContent.className="projectContent";
        var projectCard=document.createElement("div");
        projectCard.className="projectCard";
        var projectLink=document.createElement("img");
        projectLink.className="projectLink";

        projectTitle.innerHTML="Project name";
        projectVideo.src="images/video-demo.png";
        projectDescription.innerHTML="Project Description"
        projectContent.innerHTML="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor"
        projectCategories.innerHTML=" Category 1 | Category 2 | Category 3";
        projectLink.src="images/github.svg";
        
        projects.appendChild(projectCard);
        projectCard.appendChild(projectTitle);
        projectCard.appendChild(projectVideo);
        projectCard.appendChild(projectDescription);
        projectCard.appendChild(projectContent);
        projectCard.appendChild(projectCategories);
        projectCard.appendChild(projectLink);


        
        

    }
    
}
function toggleOpen() {


document.getElementById('nav').style.width="40%";


}

function toggleClose() {

if(window.innerWidth<=600){

document.getElementById('nav').style.width="0px";
}
}

function loadblogs() {
        
    for(let i=0;i<7;i++){
        var blogImage=document.createElement("img");
        blogImage.className="cardImage";
        var blogTitle=document.createElement("p");
        blogTitle.className="cardTitle";
        var blogText=document.createElement("p");
        blogText.className="cardText";
        var categoryName=document.createElement("p");
        categoryName.className="cardCategory";

        var card=document.createElement("div");
        
        card.onclick=function show(){
 
 window.location.href="blog-detail.html";
 console.log("showing");
}
        card.className="card";

        blogImage.src="test-image.png";
        categoryName.innerHTML="Category Name  |  Date"
        blogTitle.innerHTML="Lorem ipsum dolor sit amet, consectetur."
        blogText.innerHTML="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia in deserunt mollit anim id est sint laborum.";
        
        blogs.appendChild(card);
        card.appendChild(blogImage);
        card.appendChild(categoryName);
        card.appendChild(blogTitle);
        card.appendChild(blogText);


        
        

    }
    
}