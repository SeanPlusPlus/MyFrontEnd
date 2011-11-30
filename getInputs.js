function trim(str) {
  return str.replace(/^\s+|\s+$/g, '');
}

function toggleFormVisibility()
{
  var frm_element = document.getElementById('backgroundColor_frm');
  var sub_link_element = document.getElementById('sub');
  var nosub_link_element = document.getElementById('nosub');
  var vis = frm_element.style;

  if(vis.display=='' || vis.display=='none') {
	  vis.display = 'block';
	  sub_link_element.style.display='none';
	  nosub_link_element.style.display='';
  } else {
	  vis.display = 'none';
	  sub_link_element.style.display='block';
	  nosub_link_element.style.display='none';
  }

}

function processFormData()
{
  var name_element = document.getElementById('backgroundColor');
  var name = trim(name_element.value);
  var error_message = 'The following fields had errors in them: \n\n';
  var error_flag = false;

  if(name == '') {
	  error_message += 'Please select a background color\n';
	  error_flag = true;
  } else {
      document.bgColor = name;
  }
  if(error_flag) {
	  alert(error_message);
  }

}

function processFontFamily()
{
  var font_family = document.getElementById('font_family_format').value;
  document.getElementById("wrapper").style.fontFamily=font_family;
}

function processFontWeight(weight)
{
  //var font_weight = document.getElementById('font_weight_format').value;
  var font_weight = weight.value
  document.getElementById("wrapper").style.fontWeight=font_weight;
}
var min=6;
var max=20;
function increaseFontSize() {

  var p = document.getElementsByTagName('p');
  for(i=0;i<p.length;i++) {

    if(p[i].style.fontSize) {
      var s = parseInt(p[i].style.fontSize.replace("px",""));
    } else {

      var s = 14;
    }
    if(s!=max) {

      s += 1;
    }
    p[i].style.fontSize = s+"px"

  }
}
function decreaseFontSize() {
  var p = document.getElementsByTagName('p');
  for(i=0;i<p.length;i++) {

    if(p[i].style.fontSize) {
      var s = parseInt(p[i].style.fontSize.replace("px",""));
    } else {

      var s = 14;
    }
    if(s!=min) {

      s -= 1;
    }
    p[i].style.fontSize = s+"px"

  }
}
