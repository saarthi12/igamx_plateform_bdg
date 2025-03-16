<?php
	include "../../conn.php";
			
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
		if (isset($shonupost['language']) && isset($shonupost['random']) && isset($shonupost['signature']) && isset($shonupost['timestamp'])) {
			$language = htmlspecialchars(mysqli_real_escape_string($conn, $shonupost['language']));
			$random = htmlspecialchars(mysqli_real_escape_string($conn, $shonupost['random']));
			$signature = htmlspecialchars(mysqli_real_escape_string($conn, $shonupost['signature']));
			$shonustr = '{"language":'.$language.',"random":"'.$random.'"}';
			$shonusign = strtoupper(md5($shonustr));
			if($shonusign == $signature){				
				$data['popular']['platformList'][0]['vendorId'] = '23';
				$data['popular']['platformList'][0]['gameCode'] = '800';
				$data['popular']['platformList'][0]['gameNameEn'] = 'Aviator';
				$data['popular']['platformList'][0]['imgUrl'] = 'https://apiimages.sxmpro.in.net/BDGWin/apigameimages/800_20240324164730110.png';
				$data['popular']['platformList'][0]['imgUrl2'] = '';
				$data['popular']['platformList'][0]['winOdds'] = 86.7;
				$data['popular']['clicksTopList'][0]['vendorId'] = '18';
				$data['popular']['clicksTopList'][0]['gameCode'] = '51';
				$data['popular']['clicksTopList'][0]['gameNameEn'] = 'Money Coming';
				$data['popular']['clicksTopList'][0]['imgUrl'] = 'https://apiimages.sxmpro.in.net/BDGWin/apigameimages/51.png';
				$data['popular']['clicksTopList'][0]['imgUrl2'] = '';
				$data['popular']['clicksTopList'][0]['winOdds'] = 92.54;
				$data['popular']['clicksVideoTopList'][0]['vendorId'] = '16';
				$data['popular']['clicksVideoTopList'][0]['gameCode'] = '9f4xhuhdd005xlbl';
				$data['popular']['clicksVideoTopList'][0]['gameNameEn'] = 'Blackjack Silver B';
				$data['popular']['clicksVideoTopList'][0]['imgUrl'] = 'https://apiimages.sxmpro.in.net/BDGWin/apigameimages/9f4xhuhdd005xlbl.png';
				$data['popular']['clicksVideoTopList'][0]['imgUrl2'] = '';
				$data['popular']['clicksVideoTopList'][0]['winOdds'] = 0;
				$data['sport'][0]['slotsTypeID'] = 25;
				$data['sport'][0]['slotsName'] = 'Wickets9';
				$data['sport'][0]['state'] = 1;
				$data['sport'][0]['vendorImg'] = 'https://apiimages.sxmpro.in.net/BDGWin/apigameimages/vendorlogo_20240411190844d133.png';
				$data['video'][0]['slotsTypeID'] = 7;
				$data['video'][0]['slotsName'] = 'DG';
				$data['video'][0]['state'] = 1;
				$data['video'][0]['vendorImg'] = 'https://apiimages.sxmpro.in.net/BDGWin/apigameimages/vendorlogo_202404121129431pg2.png';
				
				$data['slot'][0]['slotsTypeID'] = 2;
				$data['slot'][0]['slotsName'] = 'CQ9';
				$data['slot'][0]['state'] = 1;
				$data['slot'][0]['vendorImg'] = 'https://apiimages.sxmpro.in.net/BDGWin/apigameimages/vendorlogo_20240321183506uo8v.png';
				$data['slot'][1]['slotsTypeID'] = 4;
				$data['slot'][1]['slotsName'] = 'MG';
				$data['slot'][1]['state'] = 1;
				$data['slot'][1]['vendorImg'] = 'https://apiimages.sxmpro.in.net/BDGWin/apigameimages/vendorlogo_20240321183534v51y.png';
				
				$data['chess'][0]['slotsTypeID'] = 19;
				$data['chess'][0]['slotsName'] = 'Card365';
				$data['chess'][0]['state'] = 1;
				$data['chess'][0]['vendorImg'] = 'https://apiimages.sxmpro.in.net/BDGWin/apigameimages/vendorlogo_20240306233818ju4l.png';
				$data['fish'][0]['gameID'] = 'AB3';
				$data['fish'][0]['gameNameEn'] = 'Paradise';
				$data['fish'][0]['img'] = 'https://apiimages.sxmpro.in.net/BDGWin/apigameimages/AB3.png';
				$data['fish'][0]['vendorId'] = 2;
				$data['fish'][0]['imgUrl2'] = '';
				$data['fish'][0]['customGameType'] = 0;
				$data['flash'][0]['gameID'] = '800';
				$data['flash'][0]['gameNameEn'] = 'Aviator';
				$data['flash'][0]['img'] = 'https://apiimages.sxmpro.in.net/BDGWin/apigameimages/800_20240324164730110.png';
				$data['flash'][0]['vendorId'] = 23;
				$data['flash'][0]['imgUrl2'] = '';
				$data['flash'][0]['customGameType'] = 0;
				
				$lottery[0]['id'] = 1;
				$lottery[0]['categoryCode'] = 'Win Go';
				$lottery[0]['categoryName'] = 'WinGo彩票';
				$lottery[0]['state'] = 1;
				$lottery[0]['sort'] = 0;
				$lottery[0]['categoryImg'] = 'https://apiimages.sxmpro.in.net/BDGWin/apigameimages/lotterycategory_20240321194458iceq.png';
				$lottery[0]['wingoAmount'] = null;
				$lottery[0]['k3Amount'] = null;
				$lottery[0]['fiveDAmount'] = null;
				$lottery[0]['trxWingoAmount'] = null;
				$lottery[1]['id'] = 2;
				$lottery[1]['categoryCode'] = 'K3';
				$lottery[1]['categoryName'] = 'K3彩票';
				$lottery[1]['state'] = 1;
				$lottery[1]['sort'] = 0;
				$lottery[1]['categoryImg'] = 'https://apiimages.sxmpro.in.net/BDGWin/apigameimages/lotterycategory_20240321194451en5o.png';
				$lottery[1]['wingoAmount'] = null;
				$lottery[1]['k3Amount'] = null;
				$lottery[1]['fiveDAmount'] = null;
				$lottery[1]['trxWingoAmount'] = null;
				$lottery[2]['id'] = 3;
				$lottery[2]['categoryCode'] = '5D';
				$lottery[2]['categoryName'] = '5D彩票';
				$lottery[2]['state'] = 1;
				$lottery[2]['sort'] = 0;
				$lottery[2]['categoryImg'] = 'https://apiimages.sxmpro.in.net/BDGWin/apigameimages/lotterycategory_20240321194510h9i1.png';
				$lottery[2]['wingoAmount'] = null;
				$lottery[2]['k3Amount'] = null;
				$lottery[2]['fiveDAmount'] = null;
				$lottery[2]['trxWingoAmount'] = null;
				$data['lottery'] = $lottery;
				
				$data['awardRecordList'][0]['orderId'] = 484104;
				$data['awardRecordList'][0]['userId'] = 683298;
				$data['awardRecordList'][0]['userPhoto'] = '1';
				$data['awardRecordList'][0]['userName'] = '917488747167';
				$data['awardRecordList'][0]['gameName'] = 'Aviator';
				$data['awardRecordList'][0]['imgUrl'] = 'https://apiimages.sxmpro.in.net/BDGWin/apigameimages/TB_Chess/800_20240324164730110.png';
				$data['awardRecordList'][0]['imgUrl2'] = '';
				$data['awardRecordList'][0]['multiple'] = 10.6;
				$data['awardRecordList'][0]['bonusAmount'] = 20;
				$data['awardRecordList'][0]['multipleName'] = '10-19.99';
				$data['awardRecordList'][0]['createTime'] = '2024-05-07 18:00:00';
				
				$res['data'] = $data;
				$res['code'] = 0;
				$res['msg'] = 'Succeed';
				$res['msgCode'] = 0;
				http_response_code(200);
				echo json_encode($res);
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