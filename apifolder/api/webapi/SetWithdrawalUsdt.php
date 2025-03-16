<?php 
	include "../../conn.php";
	include "../../functions2.php";
	
	header('Content-Type: application/json; charset=utf-8');
	header('Strict-Transport-Security: max-age=31536000');
	header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');
	header('Access-Control-Allow-Credentials: true');
	$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
	header('Access-Control-Allow-Origin: ' . $origin);
	header('vary: Origin');
	
	date_default_timezone_set("Asia/Kolkata");
	$shnunc = date("Y-m-d H:i:s");
	$res = [
		'code' => 11,
		'msg' => 'Method not allowed',
		'msgCode' => 12,
		'serviceNowTime' => $shnunc,
	];
	$shonubody = file_get_contents("php://input");
	$shonupost = json_decode($shonubody, true);
	
	if ($_SERVER['REQUEST_METHOD'] != 'GET') {
		if (isset($shonupost['bankid']) && isset($shonupost['codeType']) && isset($shonupost['language']) && isset($shonupost['random']) && isset($shonupost['signature']) && isset($shonupost['timestamp'])) {			
			$bankid = htmlspecialchars(mysqli_real_escape_string($conn, $shonupost['bankid']));
			$codeType = htmlspecialchars(mysqli_real_escape_string($conn, $shonupost['codeType']));
			$language = htmlspecialchars(mysqli_real_escape_string($conn, $shonupost['language']));		
			$random = htmlspecialchars(mysqli_real_escape_string($conn, $shonupost['random']));
			$signature = htmlspecialchars(mysqli_real_escape_string($conn, $shonupost['signature']));
			$smsCode = htmlspecialchars(mysqli_real_escape_string($conn, $shonupost['smsCode']));
			$type = htmlspecialchars(mysqli_real_escape_string($conn, $shonupost['type']));
			$usdtRemarkName = htmlspecialchars(mysqli_real_escape_string($conn, $shonupost['usdtRemarkName']));
			$usdtaddress = htmlspecialchars(mysqli_real_escape_string($conn, $shonupost['usdtaddress']));
			$withdrawid = htmlspecialchars(mysqli_real_escape_string($conn, $shonupost['withdrawid']));
			$shonustr = '{"bankid":'.$bankid.',"codeType":'.$codeType.',"language":'.$language.',"random":"'.$random.'","usdtRemarkName":"'.$usdtRemarkName.'","usdtaddress":"'.$usdtaddress.'","withdrawid":'.$withdrawid.'}';							
			
			$shonusign = strtoupper(md5($shonustr));
			if($shonusign == $signature){
				$bearer = explode(" ", $_SERVER['HTTP_AUTHORIZATION']);
				$author = $bearer[1];				
				$is_jwt_valid = is_jwt_valid($author);
				$data_auth = json_decode($is_jwt_valid, 1);
				if($data_auth['status'] === 'Success') {
					$sesquery = "SELECT akshinak
					  FROM shonu_subjects
					  WHERE akshinak = '$author'";
					$sesresult=$conn->query($sesquery);
					$sesnum = mysqli_num_rows($sesresult);
					if($sesnum == 1){
						/*$url = 'https://api.sxmpro.in.net/api/webapi/GetBankList';
						$payld = array(
							'language' => 0,							
							'random' => 'bbfdf080be3d4529aee34c148e0ad9f8',
							'signature' => 'FD7919EAADBA695B1C123E396B9786A2',
							'timestamp' => 1718516163,
							'withdrawid' => 1
						);
						$jsonData = json_encode($payld);
						$ch = curl_init($url);
						curl_setopt($ch, CURLOPT_POST, 1);
						curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonData);
						curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
						curl_setopt($ch, CURLOPT_HTTPHEADER, array(
							'Content-Type: application/json',
							'Content-Length: ' . strlen($jsonData),
							'Authorization: ' . $_SERVER['HTTP_AUTHORIZATION']
						));
						$response = curl_exec($ch);
						curl_close($ch);
						$rcvdt = json_decode($response, true);
						$banklist = $rcvdt['data']['banklist'];
						$searchBankID = $bankid;
						$result = null;
						foreach ($banklist as $bank) {
							if (isset($bank["bankID"]) && $bank["bankID"] == $searchBankID) {
								$result = $bank;
								break;
							}
						}
						*/
						$bankName = 'TRC';
						$shonuid = $data_auth['payload']['id'];
						
						$tathya = mysqli_query($conn,"INSERT INTO `khate` (`byabaharkarta`,`khatesankhye`,`khatakrama`,`phalanubhavi`,`kodprakara`,`daka`,`kod`,`khatehesaru`,`duravani`,`sthiti`) VALUES ('".$shonuid."','".$usdtaddress."','".$bankid."','".$usdtRemarkName."','".$codeType."',' ',' ','".$bankName."',' ','1')");
						
						$res['data'] = null;
						$res['code'] = 0;
						$res['msg'] = 'Succeed';
						$res['msgCode'] = 0;
						http_response_code(200);
						echo json_encode($res);					
					}
					else{
						$res['code'] = 4;
						$res['msg'] = 'No operation permission';
						$res['msgCode'] = 2;
						http_response_code(401);
						echo json_encode($res);
					}					
				}
				else{					
					$res['code'] = 4;
					$res['msg'] = 'No operation permission';
					$res['msgCode'] = 2;
					http_response_code(401);
					echo json_encode($res);					
				}
			}
			else{
				$res['code'] = 5;
				$res['msg'] = 'Wrong signature';
				$res['msgCode'] = 3;
				http_response_code(200);
				echo json_encode($res);				
			}
		}
		else{
			$res['code'] = 7;
			$res['msg'] = 'Param is Invalid';
			$res['msgCode'] = 6;
			http_response_code(200);
			echo json_encode($res);			
		}		
	} else {		
		http_response_code(405);
		echo json_encode($res);
	}
	
	mysqli_close($conn);
?>