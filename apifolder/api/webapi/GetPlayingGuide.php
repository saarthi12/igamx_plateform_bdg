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
		if (isset($shonupost['language']) && isset($shonupost['random']) && isset($shonupost['signature']) && isset($shonupost['timestamp'])) {
			$language = htmlspecialchars(mysqli_real_escape_string($conn, $shonupost['language']));
			$random = htmlspecialchars(mysqli_real_escape_string($conn, $shonupost['random']));
			$signature = htmlspecialchars(mysqli_real_escape_string($conn, $shonupost['signature']));
			$shonustr = '{"language":'.$language.',"random":"'.$random.'"}';
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
						$data['playingGuide'] = '<h2 style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><font color="#00ff00"><font face="Times New Roman" style="">1.&nbsp;</font>How to Register</font></h2><h2 style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><font face="Times New Roman" style="" color="#ffffff">- Fill Your Phone Number</font></h2><h2 style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><span style="font-family: &quot;Times New Roman&quot;;"><font color="#ffffff">- Set Your Own Password ( 6 letters ）<br></font></span></h2><h2 style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><span style="font-family: &quot;Times New Roman&quot;;"><font color="#ffffff">- Confirm The Password</font></span></h2><h2 style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><span style="font-family: &quot;Times New Roman&quot;;"><font color="#ffffff">- Fill Your Recommendation Code</font></span></h2><h2 style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><span style="font-family: &quot;Times New Roman&quot;;"><font color="#ffffff">- Click I Have Read And Agree<br></font></span></h2><h2 style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><span style="font-family: &quot;Times New Roman&quot;;"><font color="#ffffff">- Click Register</font></span></h2><h2 style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><font color="#ffffff"><img src="https://apiimages.sxmpro.in.net/BDGWin/apigameimages/editor_20240405135902imm2.jpg" style="width: 50%;"><br></font></h2><p style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><font color="#ffffff"><br></font></p><h2 style=""><font face="Times New Roman" style="" color="#00ff00">2. How to betting</font></h2><h2 style=""><font face="Times New Roman" style="" color="#ffffff">Click start game then choose 1 minute, 3 minute, 5 minute or 10 minute.</font></h2><h2 style=""><font face="Times New Roman" style="" color="#ffffff">Green&nbsp; : if the result shows 1,3,7,9</font></h2><h2 style=""><font face="Times New Roman" style="" color="#ffffff">Red&nbsp; &nbsp; : if the result shows 2,4,6,8</font></h2><h2 style=""><font face="Times New Roman" style="" color="#ffffff">Violet&nbsp; : if the result shows 0 or 5</font></h2><h2 style=""><font face="Times New Roman" style="" color="#ffffff">Small&nbsp; : if the result shows 0,1,2,3,4</font></h2><h2 style=""><font face="Times New Roman" style="" color="#ffffff">Big&nbsp; &nbsp; : if the result shows 5,6,7,8,9</font></h2><h2 style=""><font face="Times New Roman" style="" color="#ffffff">This company not allowed to place Illegal betting<br>Exp ：Betting (Big and small together) or (Red and Green together) in the same time.</font></h2><h2 style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><font color="#ffffff"><img src="https://apiimages.sxmpro.in.net/BDGWin/apigameimages/editor_20240405140423oyms.png" style="width: 50%;"><br></font></h2><p style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><font color="#ffffff"><br></font></p><h2 style=""><font face="Times New Roman" style="" color="#00ff00">3.How to recharge</font></h2><h2 style=""><font face="Times New Roman" style="" color="#ffffff">Click Wallet Icon, Click The Recharge Button, and we have five ways to make a recharge (BANK TRANSFER, E-WALLET, )</font></h2><p style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><font color="#ffffff"><br></font></p><p style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><font color="#ffffff"><img src="https://apiimages.sxmpro.in.net/BDGWin/apigameimages/editor_20240405140542krvy.png" style="width: 50%;"><img src="https://apiimages.sxmpro.in.net/BDGWin/apigameimages/editor_20240405140551g34d.png" style="width: 50%;"><br></font></p><h2 style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><font face="Times New Roman" style="" color="#00ff00">4. How to Withdraw</font></h2><h2 style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><font face="Times New Roman" style="" color="#ffffff">Click Wallet Icon, Click Withdraw Button.</font></h2><h2 style=""><font face="Times New Roman" style="" color="#ffffff">- Enter withdraw amount</font></h2><h2 style=""><font face="Times New Roman" style="" color="#ffffff">- Make Sure Your Total Bet Until Zero</font></h2><h2 style=""><font face="Times New Roman" style="" color="#ffffff">- Select Your Bank Account Or Add Your Bank Account</font></h2><h2 style=""><font face="Times New Roman" style="" color="#ffffff">- Input Amount You Want To Withdraw<br></font></h2><h2 style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><font face="Times New Roman" style="" color="#ffffff">- Input Your Login Password</font></h2><h2 style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><font color="#ffffff"><img src="https://apiimages.sxmpro.in.net/BDGWin/apigameimages/editor_20240405140642v6fp.png" style="width: 50%;"><img src="https://apiimages.sxmpro.in.net/BDGWin/apigameimages/editor_20240405140653yapi.png" style="width: 50%;"><br></font></h2><p style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><font color="#ffffff"><br></font></p><p style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><font color="#ffffff"><br></font></p><h2 style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><font face="Times New Roman" style="" color="#00ff00">5. Orders</font></h2><h2 style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><font face="Times New Roman" style="" color="#ffffff">When The Betting Complete You Can Click My Game Record To See Your Bet Record, You Can Check The Chart Trend.&nbsp;</font></h2><p style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><font color="#ffffff"><br></font></p><p style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><font color="#ffffff"><img src="https://apiimages.sxmpro.in.net/BDGWin/apigameimages/editor_20240405140719cb8x.png" style="width: 50%;"><br></font></p><h2 style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><font face="Times New Roman" style="" color="#00ff00">7.Promotion</font></h2><h2 style=""><font face="Times New Roman" style="" color="#ffffff">- If you have a downline or referral member use your own link to register and if they make a recharge you can claim a reward. The agent will get a minimum commission of 0.6 % (level 1) and 0.18% (level 2) from each transaction that is done by the referral (Added every day at 00:30 AM.) If the accumulated transactions of the Referral reach a certain target, the agent will get an additional bonus with the following rebates.<br>- You Can Click The Sharing Invitation Poster To See The Barcode</font></h2><h2 style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><font color="#ffffff"><img src="https://apiimages.sxmpro.in.net/BDGWin/apigameimages/editor_20240405140951vtgw.png" style="width: 50%;"><img src="https://apiimages.sxmpro.in.net/BDGWin/apigameimages/editor_20240405141022fm5y.png" style="width: 50%;"><br></font></h2><p style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><font color="#ffffff"><br></font></p><h2 style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><span style="font-family: &quot;Times New Roman&quot;;"><font color="#00ff00">8. Account security</font></span></h2><h2 style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><font face="Times New Roman" style="" color="#ffffff">Go To My Icon, Click Setting Icon.</font></h2><h2 style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><font face="Times New Roman" style="" color="#ffffff">- Click Login Password.</font></h2><h2 style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><font face="Times New Roman" style="" color="#ffffff">- Re-Enter Your Login Password.</font></h2><h2 style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><font face="Times New Roman" style="" color="#ffffff">- Enter Strongest New Password, and Confirm Your Password.</font></h2><h2 style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><font face="Times New Roman" style="" color="#ffffff">- Click Save Changes.</font></h2><h2 style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><font color="#ffffff"><img src="https://apiimages.sxmpro.in.net/BDGWin/apigameimages/editor_202404051410435gdc.png" style="width: 50%;"><img src="https://apiimages.sxmpro.in.net/BDGWin/apigameimages/editor_20240405141110dldh.png" style="width: 50%;"><font face="Times New Roman"><br></font></font></h2><h2 style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><font color="#00ff00"><font face="Times New Roman" style="">10</font>. Forgot Password</font></h2><h2 style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><font face="Times New Roman" style="" color="#ffffff">- If You Forget Your Login Password, Please Contact Customer Service Immediately.<br></font></h2><p style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><font color="#ffffff"><img src="https://apiimages.sxmpro.in.net/BDGWin/apigameimages/editor_20240405141133fofo.png" style="width: 50%;"><br></font></p><h2 style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><font face="Times New Roman" style="" color="#ffffff"><br></font></h2><h2 style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><font color="#00ff00"><font face="Times New Roman" style="">10</font>. App download&nbsp;</font></h2><h2 style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><font face="Times New Roman" style="" color="#ffffff">Click top right corner download icon, your can download the app and easy to use</font></h2><h2 style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><font color="#ffffff"><img src="https://apiimages.sxmpro.in.net/BDGWin/apigameimages/editor_20240405174304g5k1.jpg" style="width: 50%;"><br></font></h2><p style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><font color="#ffffff"><br></font></p><h2 style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><font face="Times New Roman" style="" color="#00ff00">11.About</font></h2><h2 style=""><font face="Times New Roman" style="" color="#ffffff">Click About for more details regarding Privacy Policy and Risk Disclosure Agreement.</font></h2><h2 style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><font color="#ffffff"><img src="https://apiimages.sxmpro.in.net/BDGWin/apigameimages/editor_20240405141350uqrr.png" style="width: 50%;"><img src="https://apiimages.sxmpro.in.net/BDGWin/apigameimages/editor_202404051414054hxi.png" style="width: 50%;"><br><font face="Times New Roman"><br></font></font></h2><h2 style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><font face="Times New Roman" style="" color="#00ff00">12. Gift</font></h2><h2 style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><font face="Times New Roman" style="" color="#ffffff">- Click Gift Exchange<br></font></h2><h2 style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><font face="Times New Roman" style="" color="#ffffff">- Input The Unique Code To Redemption Code The Money</font></h2><h2 style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><font face="Times New Roman" style="" color="#ffffff">- Click Receive</font></h2><h2 style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><font color="#ffffff"><span style="width: 50%;"><img src="https://apiimages.sxmpro.in.net/BDGWin/apigameimages/editor_20240405141430xbc9.png" style="width: 50%;"></span><img src="https://apiimages.sxmpro.in.net/BDGWin/apigameimages/editor_20240405141441ehmg.png" style="width: 50%;"></font><font color="#000000" style="background-color: rgb(255, 255, 0);"></font><br></h2>';
						
						$res['data'] = $data;
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
?>