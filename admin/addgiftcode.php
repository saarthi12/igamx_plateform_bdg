<?php
	session_start();
	if($_SESSION['unohs'] == null){
		header("location:index.php?msg=unauthorized");
	}
?>
<?php
	include ("conn.php");
	
	if(isset($_POST['serial']) && isset($_POST['maxusers']) && isset($_POST['price'])){
		$chkserial = mysqli_query($conn,"select * from `hodike_nirvahaka` where `enserie`='".$_POST['serial']."'");
		$chkserialrow = mysqli_num_rows($chkserial);
		if($chkserialrow==0){
			$serial = mysqli_real_escape_string($conn, $_POST['serial']);
			$maxusers = mysqli_real_escape_string($conn, $_POST['maxusers']);
			$price = mysqli_real_escape_string($conn, $_POST['price']);
			$totalusers = 0;
			$createdate = date("Y-m-d H:i");
			$status = 1;
			$sql_q = "INSERT INTO hodike_nirvahaka (enserie, utilisateurmax, prix, nombredutilisateurs, creerunrendezvous, shonu) VALUES ('".$serial."', '".$maxusers."', '".$price."', '".$totalusers."', '".$createdate."', '".$status."')";
			$chk = mysqli_query($conn, $sql_q);
			if($chk){
				echo '<script type="text/JavaScript"> alert("Gift Code Added"); </script>';
			}else {echo '<script type="text/JavaScript"> alert("Gift Code Add Failed"); </script>';}	
		}
		else{
			echo '<script type="text/JavaScript"> alert("Duplicate Gift Code"); </script>';
		}
	}
	if(isset($_POST['redserial'])){
		$a_id = $_POST['redserial'];
		$ch_s1 = "UPDATE hodike_nirvahaka SET shonu='2' WHERE enserie='".$a_id."'";
		$exe_ch_s1 = mysqli_query($conn, $ch_s1);
	}
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>Dashboard</title>
  <link rel="stylesheet" href="vendors/mdi/css/materialdesignicons.min.css">
  <link rel="stylesheet" href="vendors/feather/feather.css">
  <link rel="stylesheet" href="vendors/base/vendor.bundle.base.css">
  <link rel="stylesheet" href="vendors/flag-icon-css/css/flag-icon.min.css"/>
  <link rel="stylesheet" href="vendors/font-awesome/css/font-awesome.min.css">
  <link rel="stylesheet" href="vendors/jquery-bar-rating/fontawesome-stars-o.css">
  <link rel="stylesheet" href="vendors/jquery-bar-rating/fontawesome-stars.css">
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="plugins/datatables/dataTables.bootstrap.css">
  <link rel="stylesheet" href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.min.css">
  <link rel="stylesheet" href="https://cdn.datatables.net/fixedheader/3.2.3/css/fixedHeader.dataTables.min.css">
  <link rel="shortcut icon" href="images/favicon.png" />
  <style>
	.cool-input {
        border: 2px solid #007bff;
        border-radius: 0.25rem;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        transition: all 0.3s ease;
    }
    .cool-input:focus {
        border-color: #0056b3;
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
    .cool-input::placeholder {
        color: #6c757d;
        opacity: 1;
    }
	.cool-button {
        padding: 0.5rem 1rem;
        font-size: 1rem;
        border-radius: 0.25rem;
        transition: all 0.3s ease;
    }
    .cool-button:hover {
        background-color: #0056b3;
        color: #fff;
    }
    .cool-button.btn-secondary:hover {
        background-color: #343a40;
        color: #fff;
    }
	#copied{
		visibility: hidden;
		z-index: 1;
		position: fixed;
		bottom: 50%;
		background-color: #333;
		color: #fff;
		border-radius: 6px;
		padding: 16px;
		max-width: 250px;
		font-size: 17px;
	}	   
	#copied.show {
		visibility: visible;
		-webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
		animation: fadein 0.5s, fadeout 0.5s 2.5s;
	}
  </style>
</head>
<body>
  <div class="container-scroller">
    <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <a class="navbar-brand brand-logo" href="dashboard.php"><img src="images/logo.png" alt="logo"/></a>
        <a class="navbar-brand brand-logo-mini" href="dashboard.php"><img src="images/logo-mini.png" alt="logo"/></a>
      </div>
      <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end">
        <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
          <span class="icon-menu"></span>
        </button>       
        <ul class="navbar-nav navbar-nav-right">           
          <li class="nav-item dropdown d-flex mr-4 ">
            <a class="nav-link count-indicator dropdown-toggle d-flex align-items-center justify-content-center" id="notificationDropdown" href="#" data-toggle="dropdown">
              <i class="icon-cog"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
              <p class="mb-0 font-weight-normal float-left dropdown-header">Settings</p>              
              <a class="dropdown-item preview-item" href="logout.php">
                  <i class="icon-inbox"></i> Logout
              </a>
            </div>
          </li>
        </ul>
        <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
          <span class="icon-menu"></span>
        </button>
      </div>
    </nav>
    <div class="container-fluid page-body-wrapper">
      <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <div class="user-profile">
          <div class="user-image">
            <img src="images/faces/face28.png">
          </div>
          <div class="user-name">
              sXm Developer PVT. LTD.
          </div>
          <div class="user-designation">
              Developer
          </div>
        </div>
        <?php include 'compass.php';?>
      </nav>
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="row">
            <div class="col-sm-12 mb-4 mb-xl-0">
              <h4 class="font-weight-bold text-dark">Add Gift Code</h4>
            </div>
          </div> 
		  <div class="row">
			<form action="#" id="redform" method="post" autocomplete="off">
				<input name="serial" type="text" placeholder="Enter Gift Code" required class="flex-grow-1 cool-input" style="height: 40px;" />
				<br>
				<br>
				<input name="maxusers" type="number" placeholder="Enter Maximum Users" required class="flex-grow-1 cool-input" style="height: 40px;" />
				<br>
				<br>
				<input name="price" type="number" placeholder="Enter Price" required class="flex-grow-1 cool-input" style="height: 40px;" />
				<br>
				<br>
				<button type="submit" class="btn btn-primary cool-button mr-2">Add</button>
			</form>
          </div>
		  <div class="row">
			<div class="col-sm-12 mb-4 mb-xl-0">
              <h4 class="font-weight-bold text-dark" style="margin-top: 10px;">List of active gift codes</h4>
            </div>				
		  </div>
		  <div class="row">					
            <?php
				$sel_red = "SELECT * FROM hodike_nirvahaka WHERE shonu='1'";
				$red_r = mysqli_query($conn, $sel_red);
			?>
				<form action="#" id="redlist" method="post" autocomplete="off">
			<?php	
				while ($row = mysqli_fetch_array($red_r)) {
					$maxusers = $row['utilisateurmax'];
					$totalusers = $row['nombredutilisateurs'];
					if($totalusers<$maxusers){
			?>
					<input name="redserial" type="radio" value="<?php echo $row['enserie']; ?>" style="margin-top: 10px; margin-left:12px;" />
					<label for="<?php echo $row['enserie']; ?>"><?php echo $row['enserie']; ?></label>
					- Total Users: <?php echo $totalusers;?> &nbsp;&nbsp;&nbsp;Price: <?php echo $row['prix'];?>
					<br>
			<?php	
					}
				}
			?>
				<button type="submit" class="btn btn-primary cool-button mr-2">Deactivate</button>
				</form>
          </div>		  					  		  		  
        </div>
        <footer class="footer">
          <div class="d-sm-flex justify-content-center justify-content-sm-between">
            <span class="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright © bdggame.sxmpro.in.net 2024</span>
          </div>
        </footer>
      </div>
    </div>
  </div>
  <script src="vendors/base/vendor.bundle.base.js"></script>
  <script src="js/off-canvas.js"></script>
  <script src="js/hoverable-collapse.js"></script>
  <script src="js/template.js"></script>
  <script src="vendors/chart.js/Chart.min.js"></script>
  <script src="vendors/jquery-bar-rating/jquery.barrating.min.js"></script>
  <script src="js/dashboard.js"></script>
  <script src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js"></script>
  <script>	
	if ( window.history.replaceState ) {
        window.history.replaceState( null, null, window.location.href );
    }
  </script>
</body>

</html>