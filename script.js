let cont = document.querySelector('.story-container')
let fullStory = document.querySelector('.full-story')
let data = document.querySelectorAll('.story .data')
let closeBtn = document.querySelector('.close i')
let fullData = document.querySelector('.full-data span')


let arr = [
    {
        src: 'https://images.unsplash.com/photo-1621784563330-caee0b138a00?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        onerror: 'https://images.unsplash.com/photo-1621784563286-84f7646ef221?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjY0fHx8ZW58MHx8fHx8',
        story: 'https://images.unsplash.com/photo-1621786040662-455f23dcb6ff?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjU5fHx8ZW58MHx8fHx8',
        userName: 'Brian Lawson'
    },
    {
        src: 'https://images.unsplash.com/photo-1615212863630-1691e4c99c15?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTN8fHxlbnwwfHx8fHw%3D',
        onerror: 'https://images.unsplash.com/photo-1615212842895-426a0840dc8a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTZ8fHxlbnwwfHx8fHw%3D',
        story: 'https://images.unsplash.com/photo-1615212814093-f56085658024?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTV8fHxlbnwwfHx8fHw%3D',
        userName: 'Angelina'
    },
    {
        src: 'https://images.unsplash.com/photo-1492288991661-058aa541ff43?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTI5fHx8ZW58MHx8fHx8',
        onerror: 'https://images.unsplash.com/photo-1490248165787-419ba87bdf30?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTM5fHx8ZW58MHx8fHx8',
        story: 'https://images.unsplash.com/photo-1578445671409-bc304876004d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDB8fHxlbnwwfHx8fHw%3D',
        userName: 'Elijah Hiett'
    },
    {
        src: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjl8fHxlbnwwfHx8fHw%3D',
        onerror: 'https://images.unsplash.com/photo-1502163140606-888448ae8cfe?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTd8fHxlbnwwfHx8fHw%3D',
        story: 'https://images.unsplash.com/photo-1487980359585-fc92bf3fb9a7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MzB8fHxlbnwwfHx8fHw%3D',
        userName: 'Matheus Ferrero'
    },
    {
        src: 'https://images.unsplash.com/photo-1551024739-78e9d60c45ca?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fHw%3D',
        onerror: 'https://images.unsplash.com/photo-1527723503749-9e61addd1b3e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OTR8fHxlbnwwfHx8fHw%3D',
        story: 'https://images.unsplash.com/photo-1538939919608-e96c5d933f90?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8ODJ8fHxlbnwwfHx8fHw%3D',
        userName: 'Ayo Ogunseinde'
    },
    {
        src: 'https://images.unsplash.com/photo-1516446636564-c48e723868fc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MzN8fHxlbnwwfHx8fHw%3D',
        onerror: 'https://images.unsplash.com/photo-1516446547865-2078bb67c6d5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MzR8fHxlbnwwfHx8fHw%3D',
        story: 'https://images.unsplash.com/photo-1522160024882-e939ed724f49?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjl8fHxlbnwwfHx8fHw%3D',
        userName: 'Oliver Ragfelt'
    },
    {
        src: 'https://images.unsplash.com/photo-1572894762034-ef9d34fb85c9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTl8fHxlbnwwfHx8fHw%3D',
        onerror: 'https://images.unsplash.com/photo-1587495492376-68fefef07bf1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTB8fHxlbnwwfHx8fHw%3D',
        story: 'https://images.unsplash.com/photo-1646498263686-95d88d19e641?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8fA%3D%3D',
        userName: 'Valerie Elash'
    },
    {
        src: 'https://images.unsplash.com/photo-1580518337843-f959e992563b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTl8fHxlbnwwfHx8fHw%3D',
        onerror: 'https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTd8fHxlbnwwfHx8fHw%3D',
        story: 'https://images.unsplash.com/photo-1580518380430-2f84c0a7fb85?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTh8fHxlbnwwfHx8fHw%3D',
        userName: 'Andre Sebastian'
    },

]


let storyData = '';
arr.forEach((ele, indx) => {
    console.log('Hello');

    storyData += `<div class="story">
   <div class="data">
     <img
     id='${indx}'
     src="${ele.src}"
     alt="image"
     onerror="this.onerror=null;this.src='${ele.onerror}';"
   />
 </div>
 <h3>${ele.userName}</h3>
 </div>`;
    cont.innerHTML = storyData;

})



cont.addEventListener('click', (e) => {
    try {
        console.log(e.target.id);
        console.log(arr[e.target.id].story);
        console.log(arr[e.target.id].userName);
        let access_story = arr[e.target.id].story;
        let access_name = arr[e.target.id].userName;

        fullStory.style.display = 'block'
        fullStory.style.backgroundImage = `linear-gradient(to bottom, rgb(0 0 0 / 0.6), rgb(0 0 0 / 0)), url(${access_story})`
        fullData.innerHTML = `<h4>${access_name}</h4>`

    } catch (err) {
        console.error(`Error Found : ${err}`)
    }
    // setTimeout(()=>{
    //     fullStory.style.display = 'none'
    // },2000)
})

closeBtn.addEventListener('click', () => {
    fullStory.style.display = 'none'
})
