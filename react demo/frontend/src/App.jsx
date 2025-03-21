import React from 'react'
import './App.css';
import Counter from './Counter.jsx'
const App = () => {
  return (

    <div>
       {Counter()}
       <Counter/>
       <Counter></Counter>

      <form class="container">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" name="username" placeholder="Enter your username" />
          <div class="error" id="usernameError"></div>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" />
          <div class="error" id="emailError"></div>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" />
          <div class="error" id="passwordError"></div>
        </div>
        <button type="submit" class="btn">Login</button>
      </form>
    </div>
  )
}

export default App