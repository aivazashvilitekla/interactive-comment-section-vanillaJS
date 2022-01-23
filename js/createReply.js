import { createComment } from './createComment.js';

export function createReplyItem(item, parentID, itemID) {
    const replies = document.querySelector(
      `[data-replying="${item.replyingTo}"]`
    );
    if (replies) {
      let comment = createComment(item);
      comment.classList.add("replyComment");
      comment.dataset.parentid = parentID;
      comment.dataset.itemid = itemID;
      replies.appendChild(comment);
    }
  }