const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
const names = ["Авдей", "Аверкий", "Авксентий", "Агафон", "Алексей", "Агафья", "Агриппина", "Акулина", "Инесса"];

document.onkeydown = function (ev) {
    if (ev.ctrlKey == true && ev.code == "Enter") {
        createNewComment();
    }

};

function createNewComment() {
    const commentSpaceDiv = document.getElementById("comments");

    const commentTextStr = document.getElementById("commentText");

    const commentInputStr = commentTextStr.value;

    const comment = document.createElement("div");
    if (commentInputStr === "") {
        return false
    }
    comment.classList.add("comment");
    commentSpaceDiv.appendChild(comment);

    const commentName = document.createElement("p");
    commentName.classList.add("comment-name");
    commentName.innerText = getRandomName();
    comment.appendChild(commentName);

    const commentDate = document.createElement("span");
    commentDate.classList.add("comment-date");

    const moment = new Date();
    commentDate.innerText = `${moment.getDate()} ${months[moment.getMonth()]} ${moment.getFullYear()}`;


    comment.appendChild(commentDate);

    const commentTextDiv = document.createElement("div");
    commentTextDiv.classList.add("comment-text");
    comment.appendChild(commentTextDiv);

    const commentText = document.createElement("p");
    commentText.innerText = commentInputStr;
    commentTextDiv.appendChild(commentText)

//очищаем поле комментария
    commentTextStr.value = "";

}

function getRandomName() {
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}

