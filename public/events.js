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




document.getElementById("new-pic").addEventListener("click", handleClick);
window.addEventListener("DOMContentLoaded", handleClick);
