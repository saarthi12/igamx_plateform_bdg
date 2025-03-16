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
				$data[0]['url'] = '/#/activity/ActivityDetail?id=47';
				$data[0]['bannerUrl'] = 'https://apiimages.sxmpro.in.net/BDGWin/banner/Banner_20240405153845o1bf.png';
				$data[1]['url'] = '/#/activity/DailySignIn';
				$data[1]['bannerUrl'] = 'https://apiimages.sxmpro.in.net/BDGWin/banner/dailycheckin.png';
				$data[2]['url'] = '/#/activity/FirstRecharge';
				$data[2]['bannerUrl'] = 'https://apiimages.sxmpro.in.net/BDGWin/banner/Banner_202403212228485pll.png';
				$data[3]['url'] = '/#/vip';
				$data[3]['bannerUrl'] = 'https://apiimages.sxmpro.in.net/BDGWin/banner/Banner_20240405154218sjaq.png';
				$data[4]['url'] = '/#/main/SuperJackpot/rule';
				$data[4]['bannerUrl'] = 'https://apiimages.sxmpro.in.net/BDGWin/banner/superjackpot.png';
				$data[5]['url'] = '/#/activity/ActivityDetail?id=53';
				$data[5]['bannerUrl'] = 'https://apiimages.sxmpro.in.net/BDGWin/banner/Banner_20240414214230tg1d.png';
				$data[6]['url'] = '/#/activity/ActivityDetail?id=59';
				$data[6]['bannerUrl'] = 'https://apiimages.sxmpro.in.net/BDGWin/banner/Banner_20240416210233leig.png';
				// $data[7]['url'] = '/#/activity/ActivityDetail?id=55';
				// $data[7]['bannerUrl'] = 'https://apiimages.sxmpro.in.net/BDGWin/banner/Banner_20240502120533pp1k.png';
				$data[8]['url'] = '';
				$data[8]['bannerUrl'] = 'https://apiimages.sxmpro.in.net/BDGWin/banner/Banner_20240502152609kvq9.png';
				$data[9]['url'] = '/#/main/InvitationBonus';
				$data[9]['bannerUrl'] = 'https://apiimages.sxmpro.in.net/BDGWin/banner/Banner_20240505153741ymcr.png';
				
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