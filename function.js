// const buttonn = document.querySelector(".click");
// const test = document.querySelector(".test");
// const question = document.querySelector(".questions");

// buttonn.addEventListener("click", function () {
//     test.style.display = "none";
//     question.style.display = "block";
// });
/* <label for="numerique"> degré </label> */

const questionsList = [
    {
        text: 'Pensez-vous avoir ou avoir eu de la fièvre ces derniers jours (frissons, sueurs) ?',
        choices: `<div class="questions__inputs">
        <div class="reponse">
            <input type="radio" id="check1" value="oui" name="check">
            <label for="check1"> oui </label>
        </div>
        <div class="reponse">
            <input type="radio" id="check2" value="non" name="check">
            <label for="check2"> non </label>
        </div>
    </div>`,
        number: 1,
        type: 1
    },
    {
        text: 'Ces dernières 48 heures, quelle a été votre température la plus élevée ?',
        choices: `<div class="question2__degré">
        <input  id="numerique" type="number"  name="text" aria-describedby="text-suffix" min=34 max=42 placeholder=37,0
            required />
        <label for="numerique"> degré </label>
        </div>`,
        number: 2,
        type: 2
    },
    {
        text: 'Ces derniers jours, avez-vous une toux ou <br> une augmentation de votre toux habituelle ?',
        choices: `<div class="questions__inputs">
        <div class="reponse">
            <input type="radio" id="check1"  value="oui" name="check">
            <label for="check1"> oui </label>
        </div>
        <div class="reponse">
            <input type="radio" id="check2"  value="non" name="check">
            <label for="check2"> non </label>
        </div>
    </div>`,
        number: 3,
        type: 1
    },
    {
        text: 'Ces derniers jours, avez-vous noté une forte diminution<br> ou perte de votre goût ou de votre odorat ?',
        choices: `<div class="questions__inputs">
        <div class="reponse">
            <input type="radio" id="check1"  value="oui" name="check">
            <label for="check1"> oui </label>
        </div>
        <div class="reponse">
            <input type="radio" id="check2" value="non" name="check">
            <label for="check2"> non </label>
        </div>
    </div>`,
        number: 4,
        type: 1
    },
    {
        text: 'Ces derniers jours, avez-vous eu un mal de gorge et/ou <br> des douleurs musculaires et/ou des courbatures inhabituelles ?',
        choices: `<div class="questions__inputs">
        <div class="reponse">
            <input type="radio" id="check1"  value="oui" name="check">
            <label for="check1"> oui </label>
        </div>
        <div class="reponse">
            <input type="radio" id="check2"  value="non" name="check">
            <label for="check2"> non </label>
        </div>
    </div>`,
        number: 5,
        type: 1
    },
    {
        text: 'Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles.',
        choices: `<div class="questions__inputs">
        <div class="reponse">
            <input type="radio" id="check1"  value="oui" name="check">
            <label for="check1"> oui </label>
        </div>
        <div class="reponse">
            <input type="radio" id="check2"  value="non" name="check">
            <label for="check2"> non </label>
        </div>
    </div>`,
        number: 6,
        type: 1
    },
    {
        text: 'Ces derniers jours, avez-vous une fatigue inhabituelle ?',
        choices: `<div class="questions__inputs">
        <div class="reponse">
            <input type="radio" id="check1"  value="oui" name="check">
            <label for="check1"> oui </label>
        </div>
        <div class="reponse">
            <input type="radio" id="check2"  value="non" name="check">
            <label for="check2"> non </label>
        </div>
    </div>`,
        number: 7,
        type: 1
    },
    {
        text: 'Cette fatigue vous oblige-t-elle à vous reposer plus de la moitié de la journée ?',
        choices: `<div class="questions__inputs">
        <div class="reponse">
            <input type="radio" id="check1"  value="oui" name="check">
            <label for="check1"> oui </label>
        </div>
        <div class="reponse">
            <input type="radio" id="check2"  value="non" name="check">
            <label for="check2"> non </label>
        </div>
    </div>`,
        number: 8,
        type: 1
    },
    {
        text: "Depuis 24 heures ou plus, êtes-vous dans l'impossibilité de vous alimenter ou de boire ?",
        choices: `<div class="questions__inputs">
        <div class="reponse">
            <input type="radio" id="check1"  value="oui" name="check">
            <label for="check1"> oui </label>
        </div>
        <div class="reponse">
            <input type="radio" id="check2"  value="non" name="check">
            <label for="check2"> non </label>
        </div>
    </div>`,
        number: 9,
        type: 1
    },
    {
        text:
            'Ces dernières 24 heures, avez-vous noté un manque de souffle<br> inhabituel lorsque vous parlez ou faites un petit effort ?',
        choices: `<div class="questions__inputs">
            <div class="reponse">
                <input type="radio" id="check1"  value="oui" name="check">
                <label for="check1"> oui </label>
            </div>
            <div class="reponse">
                <input type="radio" id="check2"  value="non" name="check">
                <label for="check2"> non </label>
            </div>
        </div>`,
        number: 10,
        type: 1
    },
    {
        text: `Quel est votre âge ? <br>
        Ceci, afin de calculer un facteur de risque spécifique.`,
        choices: `<div class="question2__degré">
        <input  id="numerique" type="number" name="text" aria-describedby="text-suffix" min=34 max=42 placeholder=37,0
            required />
            <label for="numerique"> Ans </label>
        </div>`,
        number: 11,
        type: 2
    },
    {
        text: `Quel est votre taille ?<br>
        Afin de calculer l’indice de masse corporelle<br> qui est un facteur influençant le risque de complications de l’infection.`,
        choices: `<div class="question2__degré">
        <input  id="numerique" type="number" name="text" aria-describedby="text-suffix" min=34 max=42 placeholder=37,0
            required />
            <label for="numerique"> Cm </label>
        </div>`,
        number: 12,
        type: 2
    },
    {
        text: `Quel est votre poids ?<br>
        Afin de calculer l’indice de masse corporelle<br> qui est un facteur influençant le risque de complications de l’infection.`,
        choices: `<div class="question2__degré">
        <input  id="numerique" type="number" name="text" aria-describedby="text-suffix" min=34 max=42 placeholder=37,0
            required />
            <label for="numerique"> Kg </label>
        </div>`,
        number: 13,
        type: 2
    },
    {
        text: `Avez-vous de l’hypertension artérielle mal équilibrée ?<br>
        Ou avez-vous une maladie cardiaque ou vasculaire ?<br>
        Ou prenez vous un traitement à visée cardiologique ?`,
        choices: `<div class="question4__inputs">
        <div class="reponse">
            <input type="radio" id="Oui" value="oui" name="check">
            <label for="Oui"> Oui </label>
        </div>
        <div class="reponse">
            <input type="radio" id="Non"  value="non" name="check">
            <label for="Non"> Non </label>
        </div>
        <div class="reponse">
            <input type="radio" id="sait"  value="ne sait pas" name="check">
            <label for="sait"> Ne sait pas </label>
        </div>
    </div>`,
        number: 14,
        type: 1
    },
    {
        text: `Êtes-vous diabétique ?`,
        choices: `<div class="questions__inputs">
        <div class="reponse">
            <input type="radio" id="check1"  value="oui" name="check">
            <label for="check1"> oui </label>
        </div>
        <div class="reponse">
            <input type="radio" id="check2"  value="non" name="check">
            <label for="check2"> non </label>
        </div>
    </div>`,
        number: 15,
        type: 1
    },
    {
        text: `Avez-vous ou avez-vous eu un cancer ces trois dernières années ?`,
        choices: `<div class="questions__inputs">
        <div class="reponse">
            <input type="radio" id="check1"  value="oui" name="check">
            <label for="check1"> oui </label>
        </div>
        <div class="reponse">
            <input type="radio" id="check2"  value="non" name="check">
            <label for="check2"> non </label>
        </div>
    </div>`,
        number: 16,
        type: 1
    },
    {
        text: `Avez-vous une maladie respiratoire ?
        Ou êtes-vous suivi par un pneumologue ?`,
        choices: `<div class="questions__inputs">
        <div class="reponse">
            <input type="radio" id="check1"  value="oui" name="check">
            <label for="check1"> oui </label>
        </div>
        <div class="reponse">
            <input type="radio" id="check2"  value="non" name="check">
            <label for="check2"> non </label>
        </div>
    </div>`,
        number: 17,
        type: 1
    },
    {
        text: `Avez-vous une insuffisance rénale chronique dialysée ?`,
        choices: `<div class="questions__inputs">
        <div class="reponse">
            <input type="radio" id="check1"  value="oui" name="check">
            <label for="check1"> oui </label>
        </div>
        <div class="reponse">
            <input type="radio" id="check2"  value="non" name="check">
            <label for="check2"> non </label>
        </div>
    </div>`,
        number: 18,
        type: 1
    },
    {
        text: `Avez-vous une maladie chronique du foie ?`,
        choices: `<div class="questions__inputs">
        <div class="reponse">
            <input type="radio" id="check1"  value="oui" name="check">
            <label for="check1"> oui </label>
        </div>
        <div class="reponse">
            <input type="radio" id="check2"  value="non" name="check">
            <label for="check2"> non </label>
        </div>
    </div>`,
        number: 19,
        type: 1
    },
    {
        text: `Êtes-vous enceinte ?`,
        choices: `<div class="question4__inputs">
            <div class="reponse">
                <input type="radio" id="Oui"  value="oui" name="check">
                <label for="Oui"> Oui </label>
            </div>
            <div class="reponse">
                <input type="radio" id="Non"  value="non" name="check">
                <label for="Non"> Non </label>
            </div>
            <div class="reponse">
                <input type="radio" id="sait"  value="ne sait pas" name="check">
                <label for="sait"> Ne sait pas </label>
            </div>
        </div>`,
        number: 20,
        type: 1
    },
    {
        text: `Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?`,
        choices: `<div class="question4__inputs">
        <div class="reponse">
            <input type="radio" id="Oui"  value="oui" name="check">
            <label for="Oui"> Oui </label>
        </div>
        <div class="reponse">
            <input type="radio" id="Non"  value="non" name="check">
            <label for="Non"> Non </label>
        </div>
        <div class="reponse">
            <input type="radio" id="sait"  value="ne sait pas" name="check">
            <label for="sait"> Ne sait pas </label>
        </div>
    </div>`,
        number: 21,
        type: 1
    },
    {
        text: `Prenez-vous un traitement immunosuppresseur ?<br>
        C’est un traitement qui diminue vos défenses contre les infections.<br>
        Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus,<br> azathioprine, cyclophosphamide (list non exhaustive).`,
        choices: `<div class="question4__inputs">
        <div class="reponse">
            <input type="radio" id="Oui"  value="oui" name="check">
            <label for="Oui"> Oui </label>
        </div>
        <div class="reponse">
            <input type="radio" id="Non" value="non" name="check">
            <label for="Non"> Non </label>
        </div>
        <div class="reponse">
            <input type="radio" id="sait" value="ne sait pas" name="check">
            <label for="sait"> Ne sait pas </label>
        </div>
    </div>`,
        number: 22,
        type: 1
    }
];


const test = document.querySelector('.test')
const préambule = document.querySelector('#oneClick')
const quiz = document.querySelector('.change')
const form = document.querySelector('.form')
const réponse = document.querySelector('check')
const questions = document.querySelector('.questions')
const suivent = document.querySelector('.next')
const précedant = document.querySelector('.précedent')
const info = document.querySelector('.questions__one')
const progress = document.querySelector('.progress-bar')
const scor = document.querySelector('.score')
const premiereQuest = document.querySelector('.wrapper')

let counter = 0;
let arr2 = [];


préambule.onclick = function quesClick() {
    test.remove(test);
    questions.style.display = " block";
    counter += 1;

    changeQuestions(counter);
    score(counter);
};

function changeQuestions(counteer) {

    let currentQuestion = questionsList.find((ques) => {
        return ques.number == counteer;

    });

    quiz.innerHTML = currentQuestion.text;
    form.innerHTML = currentQuestion.choices;

    if (counter >= 2) {
        info.style.display = "none";
    }
    if (counter >= 1) {
        // premiereQuest.firstElementChild. 
        document.querySelector('.wrapper input[name=radio2]').checked = true;
        document.querySelector('.wrapper input[name=radio1]').checked = false;
    }

};

function score(valeur) {
    progress.firstElementChild.style.width = `${100 / 22 * valeur}%`
    scor.textContent = `${valeur}/22`
}

// function loadNextQuestion() {
//     var selectedOption = document.querySelector("input[type=radio]:checked");
//     if (!selectedOption) {
//         alert("Please select your answer!");
//         return;
//     }
// };

suivent.addEventListener('click', () => {
    let tex = document.querySelector('input[name=text]');
    console.log(form)
    if (form.firstElementChild.firstElementChild.id === "numerique") {
        // let tex = document.querySelector('input[name=text]');
        // arr2.push(tex.value);
        // console.log(tex.value);
        // // counter += 1;

        if (tex.value === "") {
            alert("enter the values")
            return;
        } else {
            arr2.push(tex.value);
            console.log(tex.value);
            counter += 1;
        }

    } else {
        var val = document.querySelector('input[name=check]:checked');
        arr2.push(val.value);
        counter += 1;

    };
    console.log(arr2)


    // counter += 1;
    if (counter > 1) {
        précedant.style.display = "block";
    }


    changeQuestions(counter);
    score(counter);

    console.log(counter)

});

précedant.addEventListener('click', () => {
    counter -= 1;

    if (counter <= 1) {
        précedant.style.display = "none";
    }

    changeQuestions(counter);
    score(counter);

    pop(arr2);
});