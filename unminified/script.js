var colors = ['white', '#0080AA', '#A0AA00', '#C8C8FA', '#F03232'];
var levels = [
  //tutorial
  'click in the center.5.5.2.2.2.1',
  'requires clicking 2 times!.5.5.2.1.1.1.2.2.1',
  'yep, multiple colors.5.5.3.1.1.2.2.2.1',
  'complete color wheel (from now on).5.5.4.0.0.1.0.1.1.1.0.1.2.2.1.3.3.1',
  genRand('now a randomly computed one', 5, 5, 5, 5),
  'pretty regular.5.5.5.0.1.1.0.3.1.1.1.1.1.3.1.2.0.1.2.1.1.2.3.1.2.4.1.3.1.1.3.3.1.4.1.1.4.3.1',
  'grid can be any size I want.6.6.5.0.3.1.1.1.1.2.4.2.3.2.1.3.3.1.4.5.1.5.0.1.5.3.1',
  'even non-square!.7.3.5.0.1.1.0.2.1.0.5.1.1.1.1.1.5.1.1.6.1.2.0.1.2.2.1.2.4.2.2.5.1',
  'so beware.10.1.5.0.0.2.0.2.1.0.3.2.0.4.1.0.6.4.0.8.1.0.9.2',
  genRand('randomly generated 3x3 with 8 clicks!', 2, 2, 5, 8),
  'there are as many levels as twice the minimum amount of clicks to complete this level.6.6.5.0.0.1.0.3.1.1.1.1.1.3.1.2.2.1.2.4.1.3.1.1.4.1.1.4.2.1.4.4.1.5.0.1',
  'if you wondered, that needed minimum 10 clicks',
  'starting to learn.6.6.5.0.3.1.1.2.1.1.4.1.2.1.1.3.0.1.3.1.1.3.3.1.3.4.1.4.1.1.4.2.1.4.4.1',
  'have fun.5.5.5.0.2.1.0.4.1.1.1.1.1.3.1.2.0.1.2.2.1.3.2.1.3.4.1.4.1.1.4.3.1',
  'don\'t screw up!.10.10.5.0.0.1.0.3.1.0.7.1.1.5.1.2.1.1.2.8.1.3.3.1.3.6.1.4.0.1.5.4.1.5.7.1.5.9.1.6.1.1.6.6.2.7.3.1.7.5.1.7.8.1.8.0.1.8.4.1.8.5.1.9.2.1.9.4.1.9.7.1',
  'you must have lost a lot on time on this awesome game.12.4.5.0.2.1.0.3.1.0.5.1.0.7.1.0.9.1.1.0.1.1.1.1.1.2.1.1.3.1.1.4.1.1.5.1.1.6.1.1.7.1.1.8.1.1.9.1.1.10.1.1.11.1.2.2.1.2.11.1.3.0.1.3.1.1.3.2.1.3.3.1.3.4.2.3.5.1.3.6.1.3.7.2.3.8.1.3.9.1.3.10.1.3.11.1',
  genRand('Almost there! random one again!', 10, 10, 5, 50),
  'final level!!!.5.5.3.1.1.0.1.1.0.2.1.2.2.1.2.1.1.1.1.1.0.0.1.1.0.1.3.0.1.3.2.1.2.1.1.1.1.1.1.3.1.2.3.1.2.2.1.2.2.1.0.4.1.0.4.1.2.4.1.3.4.1.3.3.1.4.3.1.3.1.1.3.1.1.4.1.1.4.1.1.2.3.1.2.2.1.2.2.1.3.1.1.3.1.1.2.0.1.1.0.1.1.1.1.1.2.1.2.2.1.2.4.1.3.3.1.4.1.1.4.0.1.2.2.1.2.2.1.4.3.1.1.1.1.2.3.1.2.2.1.3.0.1.1.0.1.0.0.1.0.2.1.0.3.1.1.3.1.1.1.1.2.0.1.3.0.1.3.1.1.2.1.1.2.0.1.2.1.1.1.3.1.2.2.1.2.3.1.3.3.1.3.3.1.4.3.1.4.4.1.3.4.1.4.2.1.4.2.1.4.1.1.3.0.1.3.1.1.3.1.1.2.1.1.5',
  genRand('just kidding, this is actually it', 40, 30, 5, 100) 
]

var ar = [];
var elAr = [];
var containW = 500;
//t is like 'table'
t.style.setProperty('width', containW+'px');
function getClick(x, y) {
    return function () { update(x, y) };
}
//colors in the current game: iterations/cycles
var iters = 0;

//setting up the color display, in a way that the user could theorically add as many colors as he wants and could give them any value
for (var i = 0; i < colors.length; ++i) {
    colorsDisplay.childNodes[i+1].style.setProperty('background-color', colors[i]);
}

//here is the whole of rendering and updating through the level XD
function updateCell(x, y) {
    if (elAr[x]&&elAr[x][y]) {
        ar[x][y] += 1;
        ar[x][y] %= iters;

        elAr[x][y].style.setProperty('background-color', colors[ar[x][y]]);
    }
}
function update(x, y) {
    updateCell(x, y);
    updateCell(x + 1, y);
    updateCell(x - 1, y);
    updateCell(x, y + 1);
    updateCell(x, y - 1);

    var is = true;
    for (var i = 0; i < ar.length; ++i) {
        for (var j = 0; j < ar[i].length; ++j) {
            if (ar[i][j]) is = false;
        }
    }
    if (is) {
        if (curr === last) {
            ++last;
            localStorage.last = last;
        }
        ++curr;
        impLvl(levels[curr%levels.length]);
    }
}
//current level index
var last = parseInt(localStorage.last) || 0;
var curr = last;
reset.addEventListener('click', function () {
    impLvl(levels[curr]);
})
select.addEventListener('click', function () {
    ask(['level index? 0-'+last], function (answer) {
        curr = parseInt(answer[0]);
        if(curr<=last) impLvl(levels[curr]);
        else out.textContent = 'you did not reach that level yet';
    })
})
//level generator and translator
function impLvl(level) {
    //translating
    var endLevel = level.split('.');
    for (var i = 1; i < endLevel.length; ++i) {
         endLevel[i] = parseInt(endLevel[i]);
    }
    var lvl = endLevel.splice(0, 4);
    lvl.push(endLevel);
    
    var text = lvl[0];
    var w = lvl[1];
    var h = lvl[2];
    var off = lvl[4];
    if (!(text && w && h && off)) {
        out.textContent = 'invalid level!';
        return;
    }
    iters = lvl[3];

    //resetting
    ar = [];
    elAr = [];
    while (t.childNodes.length > 0) {
        t.removeChild(t.childNodes[0]);
    }

    //generating
    for (var col = 0; col < h; ++col) {
        var tr = document.createElement('div');
        t.appendChild(tr);
        ar.push([]);
        elAr.push([]);
        for (var row = 0; row < w; ++row) {
            var cell = document.createElement('cell');
            cell.addEventListener('click', getClick(col, row));
            tr.appendChild(cell);
            ar[col].push(0);
            elAr[col].push(cell);
        }
    }

    //clicking
    for (var i = 0; i < off.length; i += 3) {
        for (var j = 0; j < off[i + 2]; ++j) {
            update(off[i], off[i + 1]);
        }
    }

    //styling
    var cellSize = containW / w;
    t.style.setProperty('height', (cellSize * h) + 'px');
    out.textContent = text;
}

//generate random level
function genRand(name, w, h, v, clicks) {
    var lvl = [name, w, h, v, []];
    for (var i = 0; i < clicks; ++i) {
        lvl[4].push((Math.random() * w) | 0, (Math.random() * h) | 0, 1);
    }
    lvl[4] = lvl[4].join('.');
    return lvl.join('.');
}

importLevel.addEventListener('click', function () {
    ask(['Insert level string'], function (string) { impLvl(string[0]) });
})

//check if you've been redirected from editor and play that level
var hash = window.location.hash.split('');
if (hash.length) {
    hash.shift();
    impLvl(hash.join(''));
} else {
    impLvl(levels[curr]);
}

//avoid prompt
function ask(questions, onsubmit) {
    var asker = document.createElement('asker');
    for (var i = 0; i < questions.length; ++i) {
        var p = document.createElement('p');
        p.innerHTML = questions[i] + '<br><input id=asker' + i + ' class=question>';
        asker.appendChild(p);
    }
    var p = document.createElement('p');
    p.innerHTML = '<input type=button id=submit value=SUBMIT>';
    asker.appendChild(p);
    document.body.appendChild(asker);
    submit.addEventListener('click', function () {
        var answers = [];
        for (var i = 0; i < questions.length; ++i) {
            answers.push(document.getElementById('asker' + i).value);
        }
        onsubmit(answers);
        document.body.removeChild(asker);
    })
}