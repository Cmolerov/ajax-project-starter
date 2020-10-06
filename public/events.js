const handleClick = () => {
    document.querySelector(".loader").innerHTML = "Loading...";
    fetch("/kitten/image")
        .then((res) => {
            if (!res.ok) throw res;
            return res.json();
        })
        .then((json) => {
            document.querySelector("img").src = json.src;
            document.querySelector(".loader").innerHTML = "";
        })
        .catch((err) => alert(`Somethine went wrong! Please try again!`));
};

const upVote = () => {
    fetch('/kitten/upvote', {
        method: 'PATCH'
    })
        .then((res) => {
            if (!res.ok) throw res; 
            return res.json(); 
        })
        .then(data => {
            document.querySelector(".score").innerHTML = data.score; 
        })
        .catch(err => console.log(err)); 
}

const downVote = () => {
    fetch('/kitten/downvote', {
        method: 'PATCH'
    })
        .then((res) => {
            if (!res.ok) throw res; 
            return res.json(); 
        })
        .then(data => {
            document.querySelector(".score").innerHTML = data.score; 
        })
        .catch(err => console.log(err)); 
}


document.getElementById("new-pic").addEventListener("click", handleClick);
window.addEventListener("DOMContentLoaded", handleClick);
document.getElementById("upvote").addEventListener("click", upVote); 
document.getElementById("downvote").addEventListener("click", downVote); 
