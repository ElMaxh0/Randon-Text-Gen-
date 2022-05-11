        var $range = document.querySelector('input'),
        $value = document.querySelector('span');
        $range.addEventListener('input', function() {
        $value.textContent = this.value;
        });
        function letra(){
            const consoantes=['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
            const vogais=["a","e","i","o","u"];
            var keyl=Math.floor(Math.random() * (10 - 1) + 1);
            if(keyl > 5){
                return vogais[Math.floor(Math.random() * vogais.length)];
            }
            else if(keyl < 5){
                return consoantes[Math.floor(Math.random() * consoantes.length)];
            }
            else{
                return "a"
            }
        }
        function Palavra(tamanho){
            var palavra ='Ola';
            var palabre = ''
            for (var i = 0; i < tamanho; i++) {
                let letter= letra();
                palavra.concat(letter);
                var palabre = palabre + letter
            }
            return palabre
        }
        function paragrafo (tamanho){
            var tam = tamanho *100
            var paragrafo =''
            for (var i = 0; i < tam ; i++) {
                let keyc='';
                let palavra= Palavra(Math.floor(Math.random() * (10 - 4) + 4));
                var paragrafo = paragrafo +' '+palavra
            }
            return paragrafo
        }
        function text(tam){
            for (var i = 0; i < tam ; i++) {
            var paragraphtext = paragrafo(Math.floor(Math.random() * (10 - 1) + 1))
            document.getElementById('contentGen').innerHTML += paragraphtext[0].toUpperCase() + paragraphtext.substr(1)
            document.getElementById('contentGen').innerHTML +="<br />"
            }
        }
        function general(){
            document.getElementById('contentGen').innerHTML =""
            text(parseInt(document.getElementById('input').value))
        }