
import { data } from '../index.js';
import { jsonObject } from '../index.js';

let lastID = 0;

const avatar = document.getElementById("newCommentAvatar");
avatar.src = jsonObject.currentUser.image.png;

// ახალი კომენტარის შექმნა
export function createComment(item) {
  // ახალი კომენტარის შექმნისას, id რომ არ განმეორდეს ბოლო აიდის ვინახავთ
  if (item.id > lastID) lastID = item.id;
  

    // COMMENT
    let comment = document.createElement("div");
    comment.className = `comment comment${item.id}`;
    // comment.id = 'comment';
    // CONTAINER
    let container = document.createElement("div");
    container.className = "container";
    comment.appendChild(container);
    // LIKES
    let likes = document.createElement("div");
    likes.className = "likes";
    container.appendChild(likes);
  
    // Button
    let btn1 = document.createElement("button");
    btn1.type = "button";
    btn1.innerHTML = `<i class="fa fa-plus">`;
    btn1.classList.add("plus");
    btn1.dataset.id = item.id;
    likes.appendChild(btn1);
  
    let h4 = document.createElement("h4");
    h4.innerText = item.score;
    likes.appendChild(h4);
  
    let btn2 = document.createElement("button");
    btn2.type = "button";
    btn2.innerHTML = `<i class="fa fa-minus">`;
    btn2.classList.add("minus");
    btn2.dataset.id = item.id;
    likes.appendChild(btn2);
    // text-container
    let textContainer = document.createElement("div");
    textContainer.className = "text-container";
    container.appendChild(textContainer);
  
    // title
    let title = document.createElement("div");
    title.className = "title";
    textContainer.appendChild(title);
    // info
    let info = document.createElement("div");
    info.className = "info";
    info.innerHTML = `<div class="avatar">
      <img src="${item.user.image.png}" alt="">
      </div>
      <div class="name">${item.user.username}</div>`;
  // ახალი კომენტარის დამატებისას თუ current user ამატებს მას, გვერდით გაუჩნდეს YOU დივი
    if (item.user.username == data.currentUser.username) {
      info.innerHTML += `<div class="you">You</div>`;
    }
    info.innerHTML += `<div class="date">${item.createdAt}</div>`;
    title.appendChild(info);
    //
  
    // reply
  // ახალი კომენტარის დამატებისას თუ current user ამატებს მას, გვერდით გაუჩნდეს წაშლის და ედიტის ღილაკები
  // ახალი ღილაკი როცა იქმნება, ივენთ ლისენერი არ მოქმედებს სანამ გვერდი არ დარეფრეშდება(ღილაკების მასივში ემატება მაგრამ მაინც არ მუშაობს, ვერ გავასწორე ეს)
    if (item.user.username == data.currentUser.username) {
      info.innerHTML += `<div class="delete"><button id='deleteBtn' data-searchid=${item.id}><i class="fa fa-trash"></i>Delete</button></div>`;
      info.innerHTML += `<div class="edit"><button id='editBtn' data-searchid=${item.id}><i class="fa fa-edit"></i>Edit</button></div>`;
    } else {
      // თუ current user-ის კომენტარი არაა, reply ღილაკი ჰქონდეს
      let reply = document.createElement("div");
      reply.className = "reply";
      reply.innerHTML = `<button type="button" id='replyBtn' data-searchid=${item.id}><i class="fa fa-reply"></i>Reply</button>`;
      title.appendChild(reply);
    }
  
    //
  
    // text
    let text = document.createElement("div");
    text.className = "text";
    textContainer.appendChild(text);
  
    //
    let p = document.createElement("p");
    p.innerText = item.content;
    p.className = `commentText${item.id}`;
    text.appendChild(p);
    if (item.user.username == data.currentUser.username) {
      let textarea = document.createElement("textarea");
      textarea.className = `textarea${item.id}`;
      textarea.style.width = "100%";
      textarea.style.height = "120px";
  
      let button = document.createElement("button");
      button.innerText = "Save";
      button.id = "saveBtn";
      button.className = `button${item.id}`;
      textarea.style.display = "none";
      button.style.display = "none";
  
      textContainer.appendChild(textarea);
      textContainer.appendChild(button);
    }
    let repliesDiv = document.createElement("div");
    repliesDiv.className = "replies";
    repliesDiv.dataset.replying = item.user.username;
    if (item.replies?.length > 0) {
      
      
    }
    comment.appendChild(repliesDiv);
    return comment;
}
  
export {lastID};
export {data};