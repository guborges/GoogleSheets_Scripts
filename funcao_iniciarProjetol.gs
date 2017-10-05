function iniciar(){
  //seto a aba ativa.
  var sheet = SpreadsheetApp.getActiveSpreadsheet(); 
  var data = Utilities.formatDate(new Date(), "GMT-03:00","dd/MM/yyyy' 'HH:mm:ss' '");
  //Botão de confirmação para iniciar
  if(alertaConfirmarIniciar() == true){
    //recebo e seto o valor de k2.
    sheet.getRange('K2').setValue(data);
    var values = sheet.getSheetValues(2, 5, 1, 1);
    
    //pego o valor de E2 e acrescento +1 no mesmo campo, fazendo um contador de quantas vezes a ação iniciar foi executada
    sheet.getRange('E2').setValue(parseInt(values)+1 );
    
    //Altero a cor do background para mostrar em qual estágio de utilização o usuário está.
    sheet.getRange('A7:E7').setBackground('DarkGreen');
    sheet.getRange('A8:E1005').setBackground('LightGreen');
    
    //função de bem vindo ao iniciar o projeto
    bemvindo(iniciar);
    
    //localizo da coluna A8 até a1005 e dou hide na coluna dentro desse parametro.
    var range = sheet.getRange("A8:A1005");
    sheet.unhideRow(range);
  }
}