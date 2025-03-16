<?php 
	// Database connection info 
	$dbDetails = array( 
		'host' => 'localhost', 
		'user' => 'u920651695_sXm', 
		'pass' => '$J$7AHNC#Q8u', 
		'db'   => 'u920651695_sXm' 
	); 
	 
	// DB table to use 
	//$table = 'tbl_user'; 
	$table = <<<EOT
	 (
		SELECT
		  bajikattuttate_aidudi_funf.byabaharkarta,
		  bajikattuttate_aidudi_funf.ojana,
		  bajikattuttate_aidudi_funf.ketebida,
		  (SELECT mobile FROM  shonu_subjects WHERE id = bajikattuttate_aidudi_funf.byabaharkarta) AS mobile,
		  (SELECT motta FROM  shonu_kaichila WHERE balakedara = bajikattuttate_aidudi_funf.byabaharkarta) AS balance
		FROM bajikattuttate_aidudi_funf
		WHERE bajikattuttate_aidudi_funf.kalaparichaya = (SELECT atadaaidi FROM gelluonduhogu_aidudi_funf ORDER BY gelluonduhogu_aidudi_funf.kramasankhye DESC LIMIT 1)
	 ) temp
	EOT;	
	 
	// Table's primary key 
	$primaryKey = 'byabaharkarta'; 
	 
	// Array of database columns which should be read and sent back to DataTables. 
	// The `db` parameter represents the column name in the database.  
	// The `dt` parameter represents the DataTables column identifier. 
	$columns = array( 
		array( 'db' => 'byabaharkarta', 'dt' => 0 ),  
		array( 'db' => 'ojana', 'dt' => 1,
				'formatter' => function( $d, $row ) { 
				return 
				($d == 10)?'Red':(($d == 11)?'Green':(($d == 12)?'Violet':(($d == 13)?'Big':(($d == 14)?'Small':$d))))
				; 
				}  		
		), 
		array( 'db' => 'ketebida', 'dt' => 2),
		array( 'db' => 'mobile', 'dt' => 3 ),
		array( 'db' => 'balance', 'dt' => 4 )
	); 
	 
	// Include SQL query processing class 
	require 'ssp_without_quote_table.php'; 
	 
	// Output data as json format 
	echo json_encode( 
		SSP::simple( $_GET, $dbDetails, $table, $primaryKey, $columns ) 
	);
?>