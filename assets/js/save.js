function save() {
    var conteudo = document.getElementById('contentGen').innerHTML;
    var style = "<style>";
    var win = window.open('', '', 'height=700,width=700');
    win.document.write('<div id="printable">');
    win.document.write(conteudo);
    win.strDefault.replace(/\s/g, '');
    win.document.close();
    win.print();
    }