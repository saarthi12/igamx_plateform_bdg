<?php 
	include("serive/samparka.php");
	include("nayakaphalitansa_mulaka_unohs_zehn.php");
	
	$prathama = date('Ymd')."04".sprintf("%04d",1);
	$sesa = $lastperiodid=date('Ymd')."04".sprintf("%04d",144);
	
	$ajitarika = date('Ymd');
	$ghanta = date('H');
	$nimisa = $ghanta*60;
	$bartamannimisa = date('i');
	$bartamankalasankhya = ceil(($nimisa+$bartamannimisa) / 10);
	
	$bartamankalakrama = $ajitarika ."04". sprintf("%04d", $bartamankalasankhya);
	$bartamankalakrama = $bartamankalakrama + 1;
	
	$tarika = date('Y-m-d H:i:s');
	
	$dekhakalakrama = mysqli_query($conn,"select atadaaidi from `gelluonduhogu_zehn` order by kramasankhye desc limit 1");
	$kaladhadi = mysqli_num_rows($dekhakalakrama);
	$kalakramadhadi=mysqli_fetch_array($dekhakalakrama);
	
	if($kaladhadi == null){
		$tathya = mysqli_query($conn,"INSERT INTO `gelluonduhogu_zehn` (`atadaaidi`,`dinankavannuracisi`) VALUES ('".$bartamankalakrama."','".$tarika."')");
	}
	else if($prathama > $kalakramadhadi['atadaaidi']){
		$katiba=mysqli_query($conn,"TRUNCATE TABLE `gelluonduhogu_zehn`");
		//$truncateQuery=mysqli_query($con,"TRUNCATE TABLE `abracadabra`");
		$tathya = mysqli_query($conn,"INSERT INTO `gelluonduhogu_zehn` (`atadaaidi`,`dinankavannuracisi`) VALUES ('".$prathama."','".$tarika."')");
	}
	else{
		$parabartikrama = $kalakramadhadi['atadaaidi'] + 1;
		$tathya = mysqli_query($conn,"INSERT INTO `gelluonduhogu_zehn` (`atadaaidi`,`dinankavannuracisi`) VALUES ('".$parabartikrama."','".$tarika."')");
	}
	
	$safa_shonu = mysqli_query($conn,"UPDATE hastacalita_phalitansa_zehn SET sthiti='0'");
?>