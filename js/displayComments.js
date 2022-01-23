

import { createComment } from './createComment.js';
import { createReplyItem } from './createReply.js';
import { lastID } from './createComment.js';
import { data } from '../index.js';

const section = document.getElementById("comments-section");
export function displayComments(arr) {
    // მასივიდან გამოაქვს კომენტარები
    arr.forEach((element, i) => {
      let comment = createComment(element);
      section.appendChild(comment);
        if (element.replies.length > 0) {
        //   თუ ამ ობიექტს replies მასივიც აქვს, მაშინ ამ reply-ებსაც გამოიტანს
        element.replies.forEach((el, i2) => {
          createReplyItem(el, i, i2);
        });
      }
    });
}
export function eventListeners() {
    const sendBtn = document.getElementById("addComment");
    const replyBtn = document.querySelectorAll("#replyBtn");

    let deleteBtn = document.querySelectorAll("#deleteBtn");
    let plusBtns = document.querySelectorAll(".plus");
    let minusBtns = document.querySelectorAll(".minus");

    // ახალი კომენტარის დამატების ღილაკი
    sendBtn.addEventListener("click", () => {
        const inputValue = document.getElementById("newComment").value;
        if (inputValue === "") {
            // თუ ინფუთი ცარიელია, შეტყობინება გამოაქვს
          const req = document.getElementById("requiredText");
          req.innerHTML = "Please fill out input field.";
          req.style.color = "red";
          setTimeout(() => (req.innerHTML = ""), 3000);
        } else {
          const d = new Date();
      
          let newCom = {
            id: lastID + 1,
            content: inputValue,
            createdAt: `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`,
            score: 0,
            user: data.currentUser,
            replies: [],
          };
          data.comments.push(newCom);
          localStorage.setItem("data", JSON.stringify(data));
          let comment = createComment(newCom);
          section.appendChild(comment);
          document.getElementById("newComment").value = "";
          getBtns();
        }
    });
    // reply კომენტარის დამატება
    replyBtn.forEach((item) => {
        item.addEventListener("click", () => {
          let newReply = document.createElement("div");
          newReply.innerHTML = `<div class="container">
          <div class="avatar"><img id="newCommentAvatar" src="${data.currentUser.image.png}" alt="avatar"></div>
          <form action="">
              <input type="text" name="comment" id="newReply" placeholder="Add a comment..." required>
              <button type="button" id="addReply">SEND</button>
          </form>
      </div>`;
          newReply.className = `newReply`;
      
          const div = document.getElementsByClassName(
            `comment${item.dataset.searchid}`
          )[0];
          div.insertBefore(newReply, div.lastChild);
      
          const input = document.getElementById("newReply");
      
          const btn = document.getElementById("addReply");
          btn.addEventListener("click", () => {
            const inputValue = input.value;
            if (inputValue === '') {
              alert('input is empty')
            } else {
              let reply = {
                "id": lastID+1,
                "content": inputValue,
                "createdAt": "1 week ago",
                "score": 0,
                "replyingTo": div.querySelector('.name').innerText,
                "user": data.currentUser
              }
              data.comments[item.dataset.searchid-1].replies.push(reply);
              onDataChange(data);
              createReplyItem(reply, item.dataset.searchid-1 ,lastID+1)
              newReply.remove();
            }
          });
        });
        deleteBtn = document.querySelectorAll("#deleteBtn");
    });
    // score-ის გაზრდა(უსასრულოდ ;დ)
    plusBtns.forEach((item) => {
        item.addEventListener("click", () => {
          const username =
            item.parentElement.nextSibling.querySelector(".name").innerText;
      
          if (data.currentUser.username == username) {
            alert("u cant like or unlike ur comment");
          } else {
            let parentid =
              item.parentElement.parentElement.parentElement.dataset.parentid;
            let itemid =
              item.parentElement.parentElement.parentElement.dataset.itemid;
      
            if (data.comments[item.dataset.id - 1]) {
              data.comments[item.dataset.id - 1].score++;
              item.nextSibling.innerText = data.comments[item.dataset.id - 1].score;
            } else {
              data.comments[parentid].replies[itemid].score++;
              item.nextSibling.innerText =
                data.comments[parentid].replies[itemid].score;
            }
            onDataChange(data);
          }
        });
    });
    // score-ის შემცირება
      minusBtns.forEach((item) => {
        item.addEventListener("click", () => {
          const username =
            item.parentElement.nextSibling.querySelector(".name").innerText;
          if (data.currentUser.username == username) {
            alert("u cant like or unlike ur comment");
          } else {
            let parentid =
              item.parentElement.parentElement.parentElement.dataset.parentid;
            let itemid = item.parentElement.parentElement.parentElement.dataset.itemid;
            if (data.comments[item.dataset.id - 1]) {
              data.comments[item.dataset.id - 1].score--;
              item.previousSibling.innerText = data.comments[item.dataset.id - 1].score;
            } else {
              data.comments[parentid].replies[itemid].score--;
              item.previousSibling.innerText =
                data.comments[parentid].replies[itemid].score;
            }
            onDataChange(data);
          }
        });
      });
    // კომენტარის წაშლის ღილაკი
    deleteBtn.forEach(item => {
        item.addEventListener("click", () => {
            const parent = document.getElementsByClassName(`comment${item.dataset.searchid}`)[0];
            let { parentid, itemid } = getIds(item);
            console.log(parentid);
            const id = item.dataset.searchid;
            // Object.values(data.comments[parentid]).includes(Number(id))
            console.log(data.comments[parentid]);
            if (parentid) {
                data.comments[parentid].replies = data.comments[parentid].replies.filter(
                    function (item) {
                        return item.id != id;
                    }
                );
            }
            else {
                data.comments = data.comments.filter(
                    function (item) {
                        return item.id != id;
                    }
                );
            }
        
            parent.remove();
            onDataChange(data);
        });
    });
    // კომენტარის ცვლილება
    const editBtn = document.querySelectorAll("#editBtn");
    editBtn.forEach(item => {
        item.addEventListener("click", () => {
            const p = document.getElementsByClassName(
              `commentText${item.dataset.searchid}`
            )[0];
            let { parentid, itemid } = getIds(item);

            const pText = p.innerText;
            const saveBtn = document.getElementsByClassName(`button${item.dataset.searchid}`)[0];
            let textarea = document.getElementsByClassName(`textarea${item.dataset.searchid}`)[0];
          
            p.style.display = "none";
            textarea.style.display = "block";
            textarea.innerText = pText;
            saveBtn.style.display = "block";
          
            saveBtn.addEventListener("click", () => {
              p.innerText = textarea.value;
              textarea.style.display = "none";
              saveBtn.style.display = "none";
          
              p.style.display = "block";
        
                if (parentid) {
                    data.comments[parentid].replies[itemid].content = p.innerText;
                } else {
                    data.comments.forEach(item2 => {
                        if (item2.id == item.dataset.searchid) {
                            item2.content = p.innerText;
                        }
                    });
                }
              
              onDataChange(data);
            });
          });
      })
    
    function getIds(item) {
        const div = document.getElementsByClassName(`comment${item.dataset.searchid}`)[0];
        const parentid = div.dataset.parentid;
        const itemid = div.dataset.itemid;
        return { parentid, itemid };
      }
      
}
// ცვლილების დროს localstorage მონაცემების განახლება
function onDataChange(data) {
    localStorage.setItem("data", JSON.stringify(data));
}

function getBtns() {
  plusBtns = document.querySelectorAll(".plus");
  minusBtns = document.querySelectorAll(".minus");
}


