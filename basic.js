/**
 * @author jabriel
 */

$(function(){
	
	$("#btn").bind("click", function(){
		
		var $s = 150, $i = 0, $r = 1, $result, $obj = $("#prod");
		
		setTimeout(function(){
			$result = 5;
			console.log(1);
		}, 2000);
		
		draw();
		
		function draw(){
			console.log(1);
			if($result !== "" && $result !== undefined && $i === 0){
				draw2();
			}else{
				$obj.find("span").removeClass("cur").eq( $i ).addClass("cur");
				$i = $i >= 7 ? 0 : $i + 1;
				$s = $s > 50 ? $s - 25 : $s;
				setTimeout(draw, $s);
			}
		}
		function draw2(){
	        $obj.find("span").removeClass("cur").eq( $i ).addClass("cur");
	        $i = $i >= 7 ? 0 : $i + 1;
	        $s = $s + 60;
	        if($r < $result + 8){
	            $r++;
	        }else{
	            $i = 0;
	            $r = 1;
	            $s = 100;
	            setTimeout(result, 1000);
	            return;
	        } 
	        setTimeout(draw2, $s);
	    }
	    function result(){
	        alert("你得到奖项" + $result);
	    }
	    
	    return false;
    });
});


