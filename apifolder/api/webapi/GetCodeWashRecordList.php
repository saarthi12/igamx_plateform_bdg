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
		if (isset($shonupost['codeType']) && isset($shonupost['language']) && isset($shonupost['pageNo']) && isset($shonupost['pageSize']) && isset($shonupost['random']) && isset($shonupost['signature']) && isset($shonupost['timestamp'])) {
			$codeType = htmlspecialchars(mysqli_real_escape_string($conn, $shonupost['codeType']));
			$language = htmlspecialchars(mysqli_real_escape_string($conn, $shonupost['language']));
			$pageNo = htmlspecialchars(mysqli_real_escape_string($conn, $shonupost['pageNo']));
			$pageSize = htmlspecialchars(mysqli_real_escape_string($conn, $shonupost['pageSize']));
			$random = htmlspecialchars(mysqli_real_escape_string($conn, $shonupost['random']));
			$signature = htmlspecialchars(mysqli_real_escape_string($conn, $shonupost['signature']));
			$shonustr = '{"codeType":'.$codeType.',"language":'.$language.',"pageNo":'.$pageNo.',"pageSize":'.$pageSize.',"random":"'.$random.'"}';
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
						if($codeType == -1 || $codeType == 3){
							$samatolana = ($pageNo - 1) * 10;
							$shonuid = $data_auth['payload']['id'];
							
							$samasye = "SELECT ketebida, ayoga
							  FROM vyavahara WHERE balakedara = $shonuid
							  AND (prakara = 'LVLCOMM1') ORDER BY shonu DESC LIMIT $pageSize OFFSET $samatolana";
							$samasyephalitansa = $conn->query($samasye);
							$samasyephalitansa_sankhye = mysqli_num_rows($samasyephalitansa);
							if($samasyephalitansa_sankhye > 0){
								$zed = 0;
								while($zed < $samasyephalitansa_sankhye){
									$row = mysqli_fetch_array($samasyephalitansa);
									$data['list'][$zed]['washVolume'] = (int)$row['ketebida'];
									$data['list'][$zed]['washRate'] = 0.85;
									$data['list'][$zed]['rebateAmount'] = (float)number_format($row['ayoga'],2);
									$zed++;
								}
								$samasye_ondu = "SELECT ketebida, ayoga
								  FROM vyavahara WHERE balakedara = $shonuid
								  AND (prakara = 'LVLCOMM1')";
								$samasyephalitansa_ondu = $conn->query($samasye_ondu);
								$samasyephalitansa_sankhye_m = mysqli_num_rows($samasyephalitansa_ondu);
								$data['pageNo'] = (int)$pageNo;
								$data['totalPage'] = ceil($samasyephalitansa_sankhye_m/10);
								$data['totalCount'] = $samasyephalitansa_sankhye_m;
							}
							else{
								$data['list'] = [];
								$data['pageNo'] = 1;
								$data['totalPage'] = 0;
								$data['totalCount'] = 0;
							}
						}
						else{
							$data['list'] = [];
							$data['pageNo'] = 1;
							$data['totalPage'] = 0;
							$data['totalCount'] = 0;
						}
						
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