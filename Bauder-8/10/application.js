import escapeHtml from 'escape-html';

// BEGIN
export default () => {

  const form = document.querySelector('form');

  form.addEventListener('submit', (event) => {
    
    event.preventDefault();

    const email = form.elements.email.value;
    const name = form.elements.name.value;
    const comment = form.elements.comment.value;

    const escapedEmail = escapeHtml(email);
    const escapedName = escapeHtml(name);
    const escapedComment = escapeHtml(comment);

    const feedbackContainer = document.createElement('div');
    const successMessage = document.createElement('p');
    const emailDiv = document.createElement('div');
    const nameDiv = document.createElement('div');
    const commentDiv = document.createElement('div');

    successMessage.textContent = 'Feedback has been sent';
    emailDiv.innerHTML = `Email: ${escapedEmail}`;
    nameDiv.innerHTML = `Name: ${escapedName}`;
    commentDiv.innerHTML = `Comment: ${escapedComment}`;

    feedbackContainer.appendChild(successMessage);
    feedbackContainer.appendChild(emailDiv);
    feedbackContainer.appendChild(nameDiv);
    feedbackContainer.appendChild(commentDiv);

    form.replaceWith(feedbackContainer);
  });
};

// END