(function() {
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
            // console.log('Jawaban benar!');
            alert('Jawaban benar!');
        } else {
            alert('SALAH. coba lagi :)');
        }
    }

    var q1 = new Question('Apakah JavaScript bahasa pemrograman paling keren sedunia?',
                          ['Ya', 'Enggak'],
                          0);

    var q2 = new Question('Siapa nama dosen yang mengajar kuliah ini ?',
                          ['John', 'Micheal', 'Oskar'],
                          2);

    var q3 = new Question('Kata yang paling bagus mendeskripsikan koding',
                          ['Bosen', 'Susah', 'Membahagiakan', 'Membosenkan'],
                          2);
    var q4 = new Question('Kata yang paling bagus mendeskripsikan koding',
                          ['Bosen', 'Susah', 'Membahagiakan', 'Membosenkan'],
                          2);
    var q3 = new Question('Kata yang paling bagus mendeskripsikan koding',
                          ['Bosen', 'Susah', 'Membahagiakan', 'Membosenkan'],
                          2);

    var questions = [q1, q2, q3];

    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();
    console.log(n);
    var answer;
    document.getElementById('jwb').addEventListener('click',function(){
        answer=parseInt(document.getElementById('ok')['rad'].value);
        questions[n].checkAnswer(answer);
        console.log(answer+' '+n);
    })
})();