<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin Login</title>
  <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
  <div class="container">
    <img src="assets/images/logo.png" alt="Logo"> <h1>Welcome Back!</h1>
    <form action="maulyikarisalu.php" method="post">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required>
      <button type="submit">Login</button>
	  <?php 
		if(isset($_GET['err']) == "ture") {
	  ?>	
			<h4>Check your username or password</h4>
	  <?
		}
		else if(isset($_GET['msg']) == "ture"){
	  ?>
			<h4>Unauthorized access</h4>
	  <?php
		}
		else if(isset($_GET['logout']) == "ture"){
	  ?>
			<h4>Logged out</h4>
	  <?php 
	    }
	  ?>
    </form>
  </div>
</body>
</html>
