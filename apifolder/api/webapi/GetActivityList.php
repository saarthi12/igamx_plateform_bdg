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
		if (isset($shonupost['language']) && isset($shonupost['pageNo']) && isset($shonupost['pageSize']) && isset($shonupost['random']) && isset($shonupost['signature']) && isset($shonupost['timestamp'])) {
			$language = htmlspecialchars(mysqli_real_escape_string($conn, $shonupost['language']));
			$pageNo = htmlspecialchars(mysqli_real_escape_string($conn, $shonupost['pageNo']));
			$pageSize = htmlspecialchars(mysqli_real_escape_string($conn, $shonupost['pageSize']));
			$random = htmlspecialchars(mysqli_real_escape_string($conn, $shonupost['random']));
			$signature = htmlspecialchars(mysqli_real_escape_string($conn, $shonupost['signature']));
			$shonustr = '{"language":'.$language.',"pageNo":'.$pageNo.',"pageSize":'.$pageSize.',"random":"'.$random.'"}';
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
						$data["\x6c\x69\x73\x74"][(int)"\x30"]["\x62\x61\x6e\x6e\x65\x72\x54\x69\x74\x6c\x65"] = "\x4d\x65\x6d\x62\x65\x72\x20\x52\x65\x63\x68\x61\x72\x67\x65\x20\x42\x65\x6e\x65\x66\x69\x74\x73";
						$data["\x6c\x69\x73\x74"][(int)"\x30"]["\x62\x61\x6e\x6e\x65\x72\x49\x44"] = (int)"\x37\x31";
						$data["\x6c\x69\x73\x74"][(int)"\x30"]["\x62\x61\x6e\x6e\x65\x72\x55\x72\x6c"] = "https://apiimages.sxmpro.in.net/BDGWin/banner/Active_20240801142416wd8v.png";
						$data["\x6c\x69\x73\x74"][(int)"\x30"]["\x6a\x75\x6d\x70\x54\x79\x70\x65"] = (int)"\x33";
						$data["\x6c\x69\x73\x74"][(int)"\x30"]["\x63\x6f\x6e\x74\x65\x6e\x74\x73"] = "";
						
						$data["\x6c\x69\x73\x74"][(int)"\x31"]["\x62\x61\x6e\x6e\x65\x72\x54\x69\x74\x6c\x65"] = "\x49\x6e\x76\x69\x74\x61\x74\x69\x6f\x6e\x20\x62\x6f\x6e\x75\x73";
						$data["\x6c\x69\x73\x74"][(int)"\x31"]["\x62\x61\x6e\x6e\x65\x72\x49\x44"] = (int)"\x36\x32";
						$data["\x6c\x69\x73\x74"][(int)"\x31"]["\x62\x61\x6e\x6e\x65\x72\x55\x72\x6c"] = "https://apiimages.sxmpro.in.net/BDGWin/banner/Banner_20240505153720owht.png";
						$data["\x6c\x69\x73\x74"][(int)"\x31"]["\x6a\x75\x6d\x70\x54\x79\x70\x65"] = (int)"\x32";
						$data["\x6c\x69\x73\x74"][(int)"\x31"]["\x63\x6f\x6e\x74\x65\x6e\x74\x73"] = "\x2f\x6d\x61\x69\x6e\x2f\x49\x6e\x76\x69\x74\x61\x74\x69\x6f\x6e\x42\x6f\x6e\x75\x73";
						
						$data["\x6c\x69\x73\x74"][(int)"\x32"]["\x62\x61\x6e\x6e\x65\x72\x54\x69\x74\x6c\x65"] = "\x31\x20\x4d\x49\x4e\x55\x54\x45\x20\x4c\x4f\x54\x54\x45\x52\x59\x20\x47\x41\x4d\x45\x9";
						$data["\x6c\x69\x73\x74"][(int)"\x32"]["\x62\x61\x6e\x6e\x65\x72\x49\x44"] = (int)"\x35\x33";
						$data["\x6c\x69\x73\x74"][(int)"\x32"]["\x62\x61\x6e\x6e\x65\x72\x55\x72\x6c"] = "https://apiimages.sxmpro.in.net/BDGWin/banner/Banner_20240405153611n2r3.png";
						$data["\x6c\x69\x73\x74"][(int)"\x32"]["\x6a\x75\x6d\x70\x54\x79\x70\x65"] = (int)"\x31";
						$data["\x6c\x69\x73\x74"][(int)"\x32"]["\x63\x6f\x6e\x74\x65\x6e\x74\x73"] = "";
						
						$data["\x6c\x69\x73\x74"][(int)"\x33"]["\x62\x61\x6e\x6e\x65\x72\x54\x69\x74\x6c\x65"] = "\x41\x76\x69\x61\x74\x6f\x72\x20\x42\x6f\x6e\x75\x73";
						$data["\x6c\x69\x73\x74"][(int)"\x33"]["\x62\x61\x6e\x6e\x65\x72\x49\x44"] = (int)"\x35\x39";
						$data["\x6c\x69\x73\x74"][(int)"\x33"]["\x62\x61\x6e\x6e\x65\x72\x55\x72\x6c"] = "https://apiimages.sxmpro.in.net/BDGWin/banner/avitorgameimage.png";
						$data["\x6c\x69\x73\x74"][(int)"\x33"]["\x6a\x75\x6d\x70\x54\x79\x70\x65"] = (int)"\x31";
						$data["\x6c\x69\x73\x74"][(int)"\x33"]["\x63\x6f\x6e\x74\x65\x6e\x74\x73"] = "";
						
						$data["\x6c\x69\x73\x74"][(int)"\x34"]["\x62\x61\x6e\x6e\x65\x72\x54\x69\x74\x6c\x65"] = "\x53\x75\x70\x65\x72\x20\x4a\x61\x63\x6b\x70\x6f\x74\x20\x43\x6f\x6d\x69\x6e\x67\x9";
						$data["\x6c\x69\x73\x74"][(int)"\x34"]["\x62\x61\x6e\x6e\x65\x72\x49\x44"] = (int)"\x34\x35";
						$data["\x6c\x69\x73\x74"][(int)"\x34"]["\x62\x61\x6e\x6e\x65\x72\x55\x72\x6c"] = "https://apiimages.sxmpro.in.net/BDGWin/banner/superjackpot.png";
						$data["\x6c\x69\x73\x74"][(int)"\x34"]["\x6a\x75\x6d\x70\x54\x79\x70\x65"] = (int)"\x32";
						$data["\x6c\x69\x73\x74"][(int)"\x34"]["\x63\x6f\x6e\x74\x65\x6e\x74\x73"] = "\x2f\x6d\x61\x69\x6e\x2f\x53\x75\x70\x65\x72\x4a\x61\x63\x6b\x70\x6f\x74";
						
						$data["\x6c\x69\x73\x74"][(int)"\x35"]["\x62\x61\x6e\x6e\x65\x72\x54\x69\x74\x6c\x65"] = "\x55\x6e\x6c\x69\x6d\x69\x74\x65\x64\x20\x44\x61\x69\x6c\x79\x20\x43\x61\x73\x68\x20\x52\x65\x62\x61\x74\x65\x9";
						$data["\x6c\x69\x73\x74"][(int)"\x35"]["\x62\x61\x6e\x6e\x65\x72\x49\x44"] = (int)"\x34\x36";
						$data["\x6c\x69\x73\x74"][(int)"\x35"]["\x62\x61\x6e\x6e\x65\x72\x55\x72\x6c"] = "https://apiimages.sxmpro.in.net/BDGWin/banner/Banner_20240405145710b8xi.png";
						$data["\x6c\x69\x73\x74"][(int)"\x35"]["\x6a\x75\x6d\x70\x54\x79\x70\x65"] = (int)"\x32";
						$data["\x6c\x69\x73\x74"][(int)"\x35"]["\x63\x6f\x6e\x74\x65\x6e\x74\x73"] = "\x2f\x76\x69\x70";
						
						$data["\x6c\x69\x73\x74"][(int)"\x36"]["\x62\x61\x6e\x6e\x65\x72\x54\x69\x74\x6c\x65"] = "\x4d\x79\x73\x74\x65\x72\x79\x20\x52\x61\x6e\x64\x6f\x6d\x20\x42\x6f\x6e\x75\x73\x9";
						$data["\x6c\x69\x73\x74"][(int)"\x36"]["\x62\x61\x6e\x6e\x65\x72\x49\x44"] = (int)"\x34\x37";
						$data["\x6c\x69\x73\x74"][(int)"\x36"]["\x62\x61\x6e\x6e\x65\x72\x55\x72\x6c"] = "https://apiimages.sxmpro.in.net/BDGWin/banner/freespin.png";
						$data["\x6c\x69\x73\x74"][(int)"\x36"]["\x6a\x75\x6d\x70\x54\x79\x70\x65"] = (int)"\x31";
						$data["\x6c\x69\x73\x74"][(int)"\x36"]["\x63\x6f\x6e\x74\x65\x6e\x74\x73"] = "";
						
						$data["\x6c\x69\x73\x74"][(int)"\x37"]["\x62\x61\x6e\x6e\x65\x72\x54\x69\x74\x6c\x65"] = "\x41\x47\x45\x4e\x54\x20\x47\x4f\x4c\x44\x20\x45\x56\x45\x4e\x54\x9";
						$data["\x6c\x69\x73\x74"][(int)"\x37"]["\x62\x61\x6e\x6e\x65\x72\x49\x44"] = (int)"\x36\x36";
						$data["\x6c\x69\x73\x74"][(int)"\x37"]["\x62\x61\x6e\x6e\x65\x72\x55\x72\x6c"] = "https://apiimages.sxmpro.in.net/BDGWin/banner/Banner_20240514165423npjh.png";
						$data["\x6c\x69\x73\x74"][(int)"\x37"]["\x6a\x75\x6d\x70\x54\x79\x70\x65"] = (int)"\x31";
						$data["\x6c\x69\x73\x74"][(int)"\x37"]["\x63\x6f\x6e\x74\x65\x6e\x74\x73"] = "";
						
						$data['pageNo'] = $pageNo;
						$data['totalPage'] = 0;
						$data['totalCount'] = 0;
						
						$res['data'] = $data;
						$res['code'] = 0;
						$res['msg'] = 'Succeed';
						$res['msgCode'] = 0;
						http_response_code(200);
						echo json_encode($res);			
					}
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
?>