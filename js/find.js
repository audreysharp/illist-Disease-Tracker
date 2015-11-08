<!DOCTYPE html>

<html>

	<head>

<script src="file://c:\\data\\activity.jsonp"></script>
function read() {
	var data = [];
	for (int i=0; i<data.length; i++) {
		var jsontext = //read stuff in??
		var obj = JSON.parse(jsontext);
		var transaction = {
			date: obj.purchase_date;
			name: obj.description;
		}
	data[i] = transaction;
	}
}
function find(var data, var search) {
	var found = 0;
	for (int i=0; i<data.length; i++) {
		if (data[i].name == search) {
			found++;
		}
	}
	return found;
}

</head>
</html>
