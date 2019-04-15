/**
 * Spreadsheets の TextFinder 機能を試すためのコンテナバインドスクリプト
 * 
 * @vesion 1.0
 * @author Kenji.Nakahara
 * @date: 2019/04/15
 * @update: 2019/04/15
 * @include libraries: 
 */

function findAll(){
	var spread = SpreadsheetApp.getActiveSpreadsheet() ;
	var sheet = spread.getSheets()[0] ;

	var textFinder = sheet.createTextFinder('日本料理');
	var ranges = textFinder.findAll();
	Logger.log('ranges.length = ' + ranges.length) ;

	for ( var i = 0; i < ranges.length; i++ ) {
		Logger.log('A1Notation = ' + ranges[i].getA1Notation()) ;
	}
}

function replaceAllWith(){
	var spread = SpreadsheetApp.getActiveSpreadsheet() ;
	var sheet = spread.getSheets()[0] ;

	var textFinder = sheet.createTextFinder('日本料理');
	var result = textFinder.replaceAllWith('ねこぽん');

	Logger.log('result = ' + result) ;
}
