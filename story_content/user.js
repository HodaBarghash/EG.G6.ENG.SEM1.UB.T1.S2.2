function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6ZTMg2d5Lt1":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbz5TzbdgUekQ8_0J8V74HpRevX4Ly_mVGqZe54ICfe5FXvXMyWv09smGrDIWnO_9pda/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v28q1attempts:player.GetVar("v28q1attempts"),v8q1answeredcorrect:player.GetVar("v28q1answeredcorrect"),v28q2attempts:player.GetVar("v28q2attempts"),v28q2answeredcorrect:player.GetVar("v28q2answeredcorrect"),v28q3attempts:player.GetVar("v28q3attempts"),v28q3answeredcorrect:player.GetVar("v28q3answeredcorrect")})
	}
	)
}

