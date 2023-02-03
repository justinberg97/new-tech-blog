const commentFormHandler = async event => {
    event.preventDefault();
    
    const postId = document.querySelector('input[name="post-id"]').value,
    body = document.querySelector('textarea[name="comment-body"]').value;
    
    if (body) {
    await fetch('/api/comment', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ postId, body })
    });

    document.location.reload();

}
};

document.querySelector('#new-comment-form').addEventListener('submit', commentFormHandler); 