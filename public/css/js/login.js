const loginFormHandler = async event => {
    event.preventDefault();
    
    const usernameEl = document.querySelector('#username-input-login'),
    passwordEl = document.querySelector('#password-input-login');
    
    const response = await fetch('/api/user/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
    username: usernameEl.value,
    password: passwordEl.value
    })
    });
    
    if (response.ok) {
    document.location.replace('/dashboard');
    } else {
    alert('Sorry, you cannot log in!');
    }
    };
    
    document.querySelector('#login-form').addEventListener('submit', loginFormHandler);