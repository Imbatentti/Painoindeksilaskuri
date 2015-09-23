$(".weight, .height").keyup(calculateBmi()){
	var row = $(this).closest('tr');
    var weight = parseInt(row.find('.weight').val(), 10);
    var height = parseInt(row.find('.height').val(), 10);
    var bmi = weight / (height / 100 * height / 100);
    row.find('.bmi').val(isNaN(bmi) ? '' : bmi);
});