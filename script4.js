(function() {
    var score=0;
    function tmbah(n){
        n+=1;
        return n;
    }
    score=tmbah(score);
    console.log(tmbah(score)+' s');
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    Question.prototype.displayQuestion = function() {
        document.getElementById('soal').innerHTML=this.question;
        var answ;
        for (let key in this.answers) {
            //console.log(key + ': ' + this.answers[key]);
            if(answ){
                answ=answ+"<input type='radio' value='"+key+"' name='rad'>"+this.answers[key]+"<br>";
            }
            else{
                answ="<input type='radio' value='"+key+"' name='rad' checked>"+this.answers[key]+"<br>";
            }
        }
        document.getElementById('pg').innerHTML=answ;
    }
    Question.prototype.checkAnswer = function(ans) {
        if (ans === this.correct) {
            // console.log('Jawaban benar!'+score);
            alert('Jawaban benar! ');
        }
        else if(ans=='exit'){
            confirm('Anda Keluar dari Permainan');
        }
        else {
            alert('SALAH. coba lagi :)');
        }
    }
    var questions = [];
    questions[0]= new Question('Apakah JavaScript bahasa pemrograman paling keren sedunia?',
                          ['Ya', 'Enggak'],
                          0);

    questions[1]= new Question('Siapa nama dosen yang mengajar kuliah ini ?',
                          ['John', 'Micheal', 'Oskar'],
                          2);

    questions[2]= new Question('Kata yang paling bagus mendeskripsikan koding',
                          ['Bosen', 'Susah', 'Membahagiakan', 'Membosenkan'],
                          2);
    questions[3]= new Question('Dimana Kampus STIKOM Yos Sudarso berada ?',
                          ['Purwokerto', 'Puetorico', 'Purworejo', 'Purwakarta'],
                          0);
    questions[4]= new Question('Kampus profesional , humanis ,serta berwawasan ...',
                          ['Teknologi', 'Lingkungan', 'Luas', 'Agama'],
                          1);

    var n = Math.floor(Math.random() * questions.length);
    questions[n].displayQuestion();
    console.log(n);
    var answer;
    document.getElementById('jwb').addEventListener('click',function(){
        answer=parseInt(document.getElementById('ok')['rad'].value);
        questions[n].checkAnswer(answer);
        // if(answer===questions[n].correct){
        //     score=tmbah(score);
        // }
    });
    document.getElementById('exit').addEventListener('click',function(){
        questions[n].checkAnswer('exit');
        // console.log(answer+' '+n);
    });
    document.getElementById('score').innerHTML='Skor anda '+score;
})();