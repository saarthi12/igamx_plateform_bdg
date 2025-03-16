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
				$data['isShowAppDownloadUp'] = true;
				$data['isShowAppDownloadDown'] = true;
				$data['isShowLotteryDragon'] = false;
				$data['isSplitLocalEWallet'] = true;
				$data['jackportMaxReswadAmount'] = 500;
				$data['projectName'] = 'BDGGAMEBysXm';
				$data['projectLogo'] = 'https://apiimages.sxmpro.in.net/BDGWin/other/h5setting_20240313181416lh4e.png';
				$data['languages'] = 'en|hd';
				$data['webIco'] = 'https://apiimages.sxmpro.in.net/BDGWin/other/h5setting_20240313181537apuy.png';
				$data['headLogo'] = 'https://apiimages.sxmpro.in.net/BDGWin/other/h5setting_202403131814229e5t.png';
				$data['dollarSign'] = '₹';
				$data['upperOrLower'] = '0';
				$data['defaultCurrentLanguage'] = 'en';
				$data['registerMobile'] = '1';
				$data['registerEmail'] = '0';
				$data['areaPhoneLenList'][0]['area'] = '+91';
				$data['areaPhoneLenList'][0]['len'] = '8-13';
				$data['areaPhoneLenList'][1]['area'] = '+90';
				$data['areaPhoneLenList'][1]['len'] = '8-13';
				$data['areaPhoneLenList'][2]['area'] = '+92';
				$data['areaPhoneLenList'][2]['len'] = '8-13';
				$data['areaPhoneLenList'][3]['area'] = '+94';
				$data['areaPhoneLenList'][3]['len'] = '8-13';
				$data['areaPhoneLenList'][4]['area'] = '+95';
				$data['areaPhoneLenList'][4]['len'] = '8-13';
				$data['areaPhoneLenList'][5]['area'] = '+880';
				$data['areaPhoneLenList'][5]['len'] = '7-13';
				$data['areaPhoneLenList'][6]['area'] = '+1';
				$data['areaPhoneLenList'][6]['len'] = '9-13';
				$data['areaPhoneLenList'][7]['area'] = '+7';
				$data['areaPhoneLenList'][7]['len'] = '9-13';
				$data['areaPhoneLenList'][8]['area'] = '+20';
				$data['areaPhoneLenList'][8]['len'] = '8-13';
				$data['areaPhoneLenList'][9]['area'] = '+27';
				$data['areaPhoneLenList'][9]['len'] = '8-13';
				$data['areaPhoneLenList'][10]['area'] = '+33';
				$data['areaPhoneLenList'][10]['len'] = '8-13';
				$data['areaPhoneLenList'][11]['area'] = '+39';
				$data['areaPhoneLenList'][11]['len'] = '8-13';
				$data['areaPhoneLenList'][12]['area'] = '+51';
				$data['areaPhoneLenList'][12]['len'] = '8-13';
				$data['areaPhoneLenList'][13]['area'] = '+54';
				$data['areaPhoneLenList'][13]['len'] = '8-13';
				$data['areaPhoneLenList'][14]['area'] = '+62';
				$data['areaPhoneLenList'][14]['len'] = '8-13';
				$data['areaPhoneLenList'][15]['area'] = '+66';
				$data['areaPhoneLenList'][15]['len'] = '8-13';
				$data['areaPhoneLenList'][16]['area'] = '+218';
				$data['areaPhoneLenList'][16]['len'] = '7-13';
				$data['areaPhoneLenList'][17]['area'] = '+212';
				$data['areaPhoneLenList'][17]['len'] = '7-13';
				$data['areaPhoneLenList'][18]['area'] = '+231';
				$data['areaPhoneLenList'][18]['len'] = '7-13';
				$data['areaPhoneLenList'][19]['area'] = '+233';
				$data['areaPhoneLenList'][19]['len'] = '7-13';
				$data['areaPhoneLenList'][20]['area'] = '+234';
				$data['areaPhoneLenList'][20]['len'] = '7-13';
				$data['areaPhoneLenList'][21]['area'] = '+235';
				$data['areaPhoneLenList'][21]['len'] = '7-13';
				$data['areaPhoneLenList'][22]['area'] = '+249';
				$data['areaPhoneLenList'][22]['len'] = '7-13';
				$data['areaPhoneLenList'][23]['area'] = '+250';
				$data['areaPhoneLenList'][23]['len'] = '7-13';
				$data['areaPhoneLenList'][24]['area'] = '+254';
				$data['areaPhoneLenList'][24]['len'] = '7-13';
				$data['areaPhoneLenList'][25]['area'] = '+255';
				$data['areaPhoneLenList'][25]['len'] = '7-13';
				$data['areaPhoneLenList'][26]['area'] = '+260';
				$data['areaPhoneLenList'][26]['len'] = '7-13';
				$data['areaPhoneLenList'][27]['area'] = '+263';
				$data['areaPhoneLenList'][27]['len'] = '7-13';
				$data['areaPhoneLenList'][28]['area'] = '+267';
				$data['areaPhoneLenList'][28]['len'] = '7-13';
				$data['areaPhoneLenList'][29]['area'] = '+971';
				$data['areaPhoneLenList'][29]['len'] = '7-13';
				$data['areaPhoneLenList'][30]['area'] = '+975';
				$data['areaPhoneLenList'][30]['len'] = '7-13';
				$data['areaPhoneLenList'][31]['area'] = '+977';
				$data['areaPhoneLenList'][31]['len'] = '7-13';
				$data['areaPhoneLenList'][32]['area'] = '+995';
				$data['areaPhoneLenList'][32]['len'] = '7-13';
				$data['areaPhoneLenList'][33]['area'] = '+234';
				$data['areaPhoneLenList'][33]['len'] = '7-13';
				$data['areaPhoneLenList'][34]['area'] = '+880';
				$data['areaPhoneLenList'][34]['len'] = '7-13';
				$data['areaPhoneLenList'][35]['area'] = '+269';
				$data['areaPhoneLenList'][35]['len'] = '7-13';
				$data['areaPhoneLenList'][36]['area'] = '+881';
				$data['areaPhoneLenList'][36]['len'] = '7-13';
				$data['areaPhoneLenList'][37]['area'] = '+243';
				$data['areaPhoneLenList'][37]['len'] = '7-13';
				$data['areaPhoneLenList'][38]['area'] = '+383';
				$data['areaPhoneLenList'][38]['len'] = '7-13';
				$data['areaPhoneLenList'][39]['area'] = '+966';
				$data['areaPhoneLenList'][39]['len'] = '7-13';
				$data['areaPhoneLenList'][40]['area'] = '+974';
				$data['areaPhoneLenList'][40]['len'] = '7-13';
				$data['registerSms'] = '0';
				$data['isOpenLoginChangeLanguage'] = '1';
				$data['rewardValidityTime'] = 30;
				$data['electronicWinRateExternalLink'] = '';
				$data['electronicWinRateImgUrl'] = 'https://apiimages.sxmpro.in.net/BDGWin';
				$data['isShowElectronicWinRateExternalLink'] = false;
				$data['isShowAppHandCodeWashingSwitch'] = true;
				$data['isShowHotGameWinOdds'] = true;
				$data['ossUrl'] = 'https://apiimages.sxmpro.in.net';
				$data['bigTurntableLink'] = null;
				$data['isOpenActivityAward'] = true;
				$data['isOpenTurntable'] = false;
				$data['isPartnerReward'] = false;
				
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