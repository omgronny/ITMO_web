<!DOCTYPE html> 
<html>
<head> 
<meta charset="UTF-8"> 
<title>Web Lab 1</title>
<style>

table {
   border: 1px solid grey;
   width: 100%;
}

th {
   font-size: 200%;
   background-color: #32b494;
   border: 1px solid grey;
}

td {
   background-color: #384349;
   color: #ebedee;
   border: 1px solid grey;
   text-align: center;
}

not_valid {
	text-align: center;
	font-size: 150%;
	color: red;
}

now_time {
	text-align: center;
	font-size: 100%;
	color: orange;
}

caption:first-letter {
	color: orange;
}



</style>
</head>

<body style = "background-color: #384349;">

<table>
<caption style="color: #ebedee;  background-color: #384349; padding: 40px; font-family: fantasy; font-size: 300%;">
Глинских Роман P3212. Вариант <pars>12006</pars>
</caption>

<tr><th colspan="5" width="70%">Результат</th></tr>
<tr><td>Время работы скрипта</td><td> X </td><td>Y</td><td>R</td><td>Результат</td></tr>
<?php


$script_time_begin = (float)microtime();

$valid_pars_for_r=array(1,2,1.5,2.5,3);

$res = false;

$is_valid = true;

if ((trim($_GET["par_r"]) == "") || (!is_numeric($_GET["par_r"])) || (!in_array((float)$_GET["par_r"], $valid_pars_for_r))) {
	
	echo "</table>";
	echo "<h2><not_valid>Неверно указан параметр R</not_valid></h2>";
	
	$is_valid = false;
	
}


$valid_pars_for_x=array(-4,-3,-2,-1,0,1,2,3,4);

if ((trim($_GET["par_x"]) == "") || (!is_numeric($_GET["par_x"])) || (!in_array((float)$_GET["par_x"], $valid_pars_for_x))) {
	
	echo "</table>";
	echo "<h2><not_valid>Неверно указан параметр X</not_valid></h2>";
	
	$is_valid = false;
	
	
}


if ((trim($_GET["par_y"]) == "") || (!is_numeric($_GET["par_y"])) || ((float)$_GET["par_y"] > 3) || ((float)$_GET["par_y"] < -5)) {
	
	echo "</table>";
	echo "<h2><not_valid>Неверно указан параметр Y</not_valid></h2>";
	
	$is_valid = false;
	
}




if (($is_valid) || (trim($_GET["par_r"]) !== "") && (trim($_GET["par_x"]) !== "") && (trim($_GET["par_y"]) !== "") && (is_numeric($_GET["par_r"])) && (is_numeric($_GET["par_x"])) && (is_numeric($_GET["par_y"])))
{
	

	$par_r = (float)$_GET["par_r"];
	$par_x = (float)$_GET["par_x"];
	$par_y = (float)$_GET["par_y"];


	if ($par_x > 0 && $par_y > 0) { 
		$res = $par_x < $par_r && $par_y < ($par_r)/2;
	}

	if ($par_x < 0 && $par_y > 0) {
		$res = pow($par_x, 2) + pow($par_y, 2) < pow($par_r, 2);
	}

	if ($par_x < 0 && $par_y < 0) { 
		$res = $par_x + $par_y > ((-1)*$par_r)/2;
	}



if ($res) {
	$str_res = "Точка попала в нужную зону";
} else {
	$str_res = "Точка не попала в нужную зону";
}

$script_time_end = (float)microtime();
$script_time_res = $script_time_end - $script_time_begin;
$script_time_res = number_format($script_time_res, 10, '.', ' ');
$newstr="<tr><td>".$script_time_res."</td><td>$par_x</td><td>$par_y</td><td>$par_r</td><td>$str_res</td></tr>";

$file = @fopen("data/results.txt", "r");

$str = "";
while (($buffer = fgets($file, 4096)) !== false) {
    $strs = explode(",", $buffer);
    $str .= "<tr><td>".$strs[0]."</td><td>".$strs[1]."</td><td>".$strs[2]."</td><td>".$strs[3]."</td><td>".$strs[4].$strs[5]."</td></tr>";
}
fclose($file);

echo $newstr;
echo $str;

$csv_str="".$script_time_res.",$par_x,$par_y,$par_r,$str_res\n";
$csv_str.=file_get_contents("data/results.txt");

$fp = fopen("data/results.txt", "w");
$test = fwrite($fp, $csv_str);
fclose($fp);

echo "</table>";


date_default_timezone_set('Europe/Moscow');
$time = (string)date('l jS \of F Y h:i:s A');
echo "<h3><now_time>$time</now_time><h3>";


}


?>

</body>
</html>


