function trim(str) {
  return str.replace(/^\s+|\s+$/g, '');
}

function checkEmail(email)
{	
	
  var pattern=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
  
  if(pattern.test(email)) {         
	return true;
  } else {   
	return false; 
  }

}

function toggleFormVisibility()
{
  var frm_element = document.getElementById('subscribe_frm'); 
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

  var name_element = document.getElementById('txt_name');
  var email_element = document.getElementById('txt_email');
  var mail_format_element = document.getElementById('slt_mail_format');

  var name = trim(name_element.value);
  var email = trim(email_element.value);
  var mail_format = mail_format_element.value;

  var error_message = 'The following fields had errors in them: \n\n';
  var data = 'You entered the following information: \n\n';

  var error_flag = false;

  if(name == '') {
	  error_message += 'Name: Please enter your name\n';
	  error_flag = true;
  } else {
	  data += 'Name: ' + name + '\n';
  }

  if(!checkEmail(email)) {
	  error_message += 'Email: Please enter a valid email address';
	  error_flag = true;
  } else {
	  data += 'Email: ' + email + '\n';
  }

  data += 'Mail Format: ' + mail_format;

  if(error_flag) {
	  alert(error_message);
  } else {
	  alert(data);
  }

}