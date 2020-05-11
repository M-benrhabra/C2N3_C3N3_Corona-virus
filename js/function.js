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
        text: 'Ces derniers jours, avez-vous des douleurs musculaires <br>  et/ou des courbatures inhabituelles ?',
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
        number: 4,
        type: 1
    },
    {
        text: 'Ces derniers jours, avez-vous un mal de gorge apparu ?',
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
        text: 'ces derniers jours, Avez-vous une fatigue inhabituelle ?',
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
        text: 'Avez-vous des difficultés importantes pour vous alimenter <br> ou boire depuis plus de 24h ?',
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
        text: "Avez-vous vu apparaître une gêne respiratoire ou <br> une augmentation de votre gêne respiratoire habituelle ? ",
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
        text:
            'Comment vous sentez-vous ?',
        choices: `<div class="question3__q">
        <div class="question3__inputs">
            <div class="reponse">
                <input type="radio" id="fatig" value="fatigue"  name="check">
                <label for="fatig"> fatigue </label>
            </div>
            <div class="reponse">
                <input type="radio" id="trop" value="trop-fatigue" name="check">
                <label for="trop"> trop fatgue </label>
            </div>
        </div>
        <div class="question3__inputs">
            <div class="reponse">
                <input type="radio" id="Bien" value="Bien" name="check">
                <label for="Bien"> Bien </label>
            </div>
            <div class="reponse">
                <input type="radio" id="moyen" value="moyen" name="check">
                <label for="moyen"> moyen </label>
            </div>
        </div>
    </div>`,
        number: 11,
        type: 1
    },
    {
        text: `Quel est votre âge ? <br>
        Ceci, afin de calculer un facteur de risque spécifique.`,
        choices: `<div class="question2__degré">
        <input  id="numerique" type="number" name="text" aria-describedby="text-suffix"  placeholder=50
            required />
            <label for="numerique"> Ans </label>
        </div>`,
        number: 12,
        type: 2
    },
    {
        text: `Quel est votre taille ?<br>
        Afin de calculer l’indice de masse corporelle<br> qui est un facteur influençant le risque de complications de l’infection.`,
        choices: `<div class="question2__degré">
        <input  id="numerique" type="number" name="text" aria-describedby="text-suffix"  placeholder=100
            required />
            <label for="numerique"> Cm </label>
        </div>`,
        number: 13,
        type: 2
    },
    {
        text: `Quel est votre poids ?<br>
        Afin de calculer l’indice de masse corporelle<br> qui est un facteur influençant le risque de complications de l’infection.`,
        choices: `<div class="question2__degré">
        <input  id="numerique" type="number" name="text" aria-describedby="text-suffix"  placeholder=50
            required />
            <label for="numerique"> Kg </label>
        </div>`,
        number: 14,
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
        number: 15,
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
        number: 16,
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
        number: 17,
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
        number: 18,
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
        number: 19,
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
        number: 20,
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
        number: 21,
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
        number: 22,
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
        number: 23,
        type: 1
    }
];


const test = document.querySelector('.test')
const préambule = document.querySelector('#oneClick')
const quiz = document.querySelector('.change')
const form = document.querySelector('.form')
const réponse = document.getElementsByName('check')
const questions = document.querySelector('.questions')
const suivent = document.querySelector('.next')
const précedant = document.querySelector('.précedent')
const info = document.querySelector('.questions__one')
const barr = document.querySelector('.questions__pro')
const progress = document.querySelector('.progress-bar')
const scor = document.querySelector('.score')
const premiereQuest = document.querySelector('.wrapper')
const resultat = document.querySelector('.resultat')
const elemen = document.querySelector('.questions__createElement')

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
    if (counteer < 24) {
        let currentQuestion = questionsList.find((ques) => {
            return ques.number == counteer;

        });

        quiz.innerHTML = currentQuestion.text;
        form.innerHTML = currentQuestion.choices;
    }

    if (counter >= 2) {
        info.style.display = "none";
    }
    if (counter >= 1) {
        // premiereQuest.firstElementChild. 
        document.querySelector('.wrapper input[name=radio2]').checked = true;
        document.querySelector('.wrapper input[name=radio1]').checked = false;
        document.querySelector('.wrapper input[name=radio1]').disabled = true;
        document.querySelector('.wrapper input[name=radio3]').disabled = true;
        // document.getElementById(identifiantDeLElement).disabled = true;
    }

};

function score(valeur) {
    progress.firstElementChild.style.width = `${100 / 23 * valeur}%`
    scor.textContent = `${valeur}/23`
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

        if (tex.value === "") {
            alert("enter the values")
            return;
        } else if (counter === 2 && (tex.value < 34 || tex.value > 42)) {
            alert('la temperature doit etre comprise entre 34 et 42');
            return;
        } else if (counter === 12 && tex.value > 110) {
            alert("l'age doit etre inferieure a 110");
            return;
        } else if (counter === 13 && (tex.value < 80 || tex.value > 250)) {
            alert('la taille doit etre comprise entre 80 et 250');
            return;
        } else if (counter === 14 && (tex.value < 20 || tex.value > 250)) {
            alert('le poids doit etre compris entre 20 et 250');
            return;
        } else {
            arr2.push(tex.value);
            console.log(tex.value);
            counter += 1;
        }

    } else {
        // var val = document.querySelector('input[name=check]:checked');
        for (i = 0; i < réponse.length; i++) {
            if (réponse[i].checked) {
                if (counter === 1 && réponse[i].value === 'non') {
                    arr2.push(réponse[i].value);
                    arr2.push(37);
                    counter += 2;
                } else if (counter === 7 && réponse[i].value === 'non') {
                    arr2.push(réponse[i].value);
                    arr2.push('non');
                    counter += 2;
                } else {
                    arr2.push(réponse[i].value);
                    counter += 1;
                }
            }
        }
        // arr2.push(réponse.value);
        // counter += 1;

    };

    console.log(arr2)
    // counter += 1;
    if (counter > 1) {
        précedant.style.display = "block";
    }
    if (counter === 23) {
        suivent.textContent = `Enregistrer et continuer`;
    }
    changeQuestions(counter);
    score(counter);
    console.log(counter)

    resultatDuTest(arr2, counter)
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

/////////////////////////la fonction des résultats

const explication = document.querySelector('.resultat__explication')
const titre = document.querySelector('.resultat__title')

function resultatDuTest(question, counter) {

    // les variables

    let symtome = question.slice(0, 5);
    let Pronostique = question.slice(11);
    let fièvre = question[0] === 'oui';
    let toux = question[2] === 'oui';
    let malDeGorge = question[4] === 'oui';
    let courbatures = question[3] === 'oui';
    let diarrhée = question[5] === 'oui';
    let nFièvre = question[0] === 'non';
    let nToux = question[2] === 'non';
    let nMalDeGorge = question[4] === 'non';
    let nCourbatures = question[3] === 'non';
    let nDiarrhée = question[5] === 'non';
    let nSymtome = !symtome.includes('oui');
    let facProno = Pronostique.includes('oui');
    let nFacProno = !Pronostique.includes('oui');

    ////////////////facteurs de gravité mineures 
    let hauteFievre = question[1] > 39;
    let fatigue = question[7] === 'oui';
    let malaise = question[10] === 'fatigue' || question[10] === 'trop-fatigue';
    let nHauteFievre = question[1] < 39;
    let nFatigue = question[7] === 'non';
    let nMalaise = question[10] === 'bien' || question[10] === 'moyen';

    ////////////////facteurs de gravité majeurs
    let basseFievre = question[1] < 35.4;
    let geneResp = question[9] === 'oui';
    let difAlim = question[8] === 'oui';
    let nBasseFievre = question[1] > 35.4;
    let nGeneResp = question[9] === 'non';
    let nDifAlim = question[8] === 'non';

    // //////////conditions 

    let age = question[11];
    if (counter === 13 && age < 15) {
        document.querySelector('.wrapper input[name=radio3]').checked = true;
        document.querySelector('.wrapper input[name=radio1]').checked = false;
        document.querySelector('.wrapper input[name=radio2]').checked = false;
        document.querySelector('.wrapper input[name=radio1]').disabled = true;
        document.querySelector('.wrapper input[name=radio2]').disabled = true;
        elemen.remove(elemen);
        resultat.style.display = 'block';
        barr.style.display = 'none';

        titre.innerHTML = `le resultat de votre test`
        explication.firstElementChild.textContent = `Prenez contact avec votre médecin généraliste au moindre doute.
                                                     Cette application n’est pour l’instant pas adaptée aux personnes de moins de 15 ans. En cas d’urgence, appeler le 15`;
    }
    if (counter === 24) {
        document.querySelector('.wrapper input[name=radio3]').checked = true;
        document.querySelector('.wrapper input[name=radio1]').checked = false;
        document.querySelector('.wrapper input[name=radio2]').checked = false;
        document.querySelector('.wrapper input[name=radio1]').disabled = true;
        document.querySelector('.wrapper input[name=radio2]').disabled = true;
        elemen.remove(elemen);
        resultat.style.display = 'block';
        barr.style.display = 'none';
        suivent.remove(suivent);
        précedant.remove(précedant);

        if (fièvre || (toux && malDeGorge) || (toux && courbatures)) {
            if (age < 50 && nFacProno && nHauteFievre && nFatigue && nMalaise && nGeneResp && nDifAlim && nBasseFievre) {
                titre.innerHTML = `le resultat de votre test`
                explication.firstElementChild.textContent = `nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’apparition de nouveaux symptômes.
                                                                 Vous pourrez aussi utiliser à nouveau l’application pour réévaluer vos symptômes`;
            } else if(
                (age > 50 && age <= 69 && (nFacProno && nHauteFievre && nFatigue && nMalaise && nGeneResp && nDifAlim && nBasseFievre)) ||
                (nFacProno && nBasseFievre && nGeneResp && nDifAlim && (hauteFievre || fatigue || malaise)) ) {
                    
                titre.innerHTML = `le resultat de votre test`
                explication.firstElementChild.textContent = ` téléconsultation ou médecin généraliste ou visite à domicile`;

            } else if (facProno && nHauteFievre && nFatigue && nMalaise && nGeneResp && nDifAlim && nBasseFievre) {
                titre.innerHTML = `le resultat de votre test`
                explication.firstElementChild.textContent = ` téléconsultation ou médecin généraliste ou visite à domicile`;

            } else if (
                (facProno && nGeneResp && nDifAlim && nBasseFievre && ((hauteFievre && fatigue && malaise) ||
                    (hauteFievre && fatigue) ||
                    (fatigue && malaise) ||
                    (hauteFievre && malaise))) ||
                (facProno && nGeneResp && nDifAlim && nBasseFievre && hauteFievre && nFatigue && nMalaise) ||
                (facProno && nGeneResp && nDifAlim && nBasseFievre && fatigue && nHauteFievre && nMalaise) ||
                (facProno && nGeneResp && nDifAlim && nBasseFievre && malaise && nHauteFievre && nFatigue)
            ) {
                titre.innerHTML = `le resultat de votre test`
                explication.firstElementChild.textContent = `veuillez appeler le numéro 141`;
            
            } else if(basseFievre || geneResp || difAlim) {
                titre.innerHTML = `le resultat de votre test`
                explication.firstElementChild.textContent = `veuillez appeler le numéro 141`;
            
            } else {
                titre.innerHTML = `le resultat de votre test`
                explication.firstElementChild.textContent = ` Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute.
                                                 Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la situation. Pour toute information concernant le Covid-19 allez vers la page d’accueil.`;
            }



        } else if (
            (fièvre && nToux && nDiarrhée) ||
            (nFièvre && toux && nMalDeGorge && nCourbatures) ||
            (nFièvre && nToux && malDeGorge) ||
            (nToux && courbatures) ||
            (nFièvre && diarrhée)
        ) {
            if (nHauteFievre && nFatigue && nMalaise && nGeneResp && nDifAlim && nBasseFievre) {
                titre.innerHTML = `le resultat de votre test`
                explication.firstElementChild.textContent = ` Votre situation ne relève probablement pas du Covid-19. Consultez votre médecin au moindre doute.`;

            } else if (
                (noFacPro && nGeneResp && nDifAlim && nBasseFievre && hauteFievre && nFatigue && nMalaise) ||
                (noFacPro && nGeneResp && nDifAlim && nBasseFievre && fatigue && nHauteFievre && nMalaise) ||
                (noFacPro && nGeneResp && nDifAlim && nBasseFievre && malaise && nHauteFievre && nFatigue) ||
                (facPro && nGeneResp && nDifAlim && nBasseFievre && nMalaise && nHauteFievre && nFatigue)
            ) {
                titre.innerHTML = `le resultat de votre test`
                explication.firstElementChild.textContent = ` Votre situation ne relève probablement pas du Covid-19. Un avis médical est recommandé. Au moindre doute, appelez le 141.`;

            } else {
                titre.innerHTML = `le resultat de votre test`
                explication.firstElementChild.textContent = `Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute.
                 Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la situation. Pour toute information concernant le Covid-19 allez vers la page d’accueil.`;

            }
        } else {
            titre.innerHTML = `le resultat de votre test`
            explication.firstElementChild.textContent = ` Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute. 
            Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la situation. Pour toute information concernant le Covid-19 allez vers la page d’accueil.`;

        }
    }
}