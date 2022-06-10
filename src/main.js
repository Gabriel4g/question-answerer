// Aplicacão que responde perguntas relacionadas a jogos.

const input_quest = document.querySelector("#input-quest")
const button_quest = document.querySelector("#button-quest");
const Clone_question = document.getElementById("pergunta");
const answer = document.getElementById("resposta");

const arrowMotivation = () => {
    answer.innerHTML = "Vai sim! Continue estudando que vc vai longe."
}

function askQuestion() {

    // const elosValorant = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Diamante", "Imortal", "Radiante"]

    const objectQuestions = {
        emptyQuestion: '',
        devBrabo: 'Vou ser um programador brabo?',
        question1: "Qual o melhor jogo do momento?",
        question2: 'Quem te criou?',
        question3: 'Nescau ou toddy?',
        question4: 'Me fale uns jogos legais',
        question5: 'Valorant é fps tatico?',
        question6: 'Quem desenvolveu o valorant?',
        question7: 'Quem nasceu primeiro, o ovo ou a galinha?',
        question8: 'Quem é o melhor gamer do Brasil?',
        question9: 'Qual foi o melhor console de todos os tempos?',
        question10: 'Qual é o jogo que nunca vai ser superado?'
    }

    if (input_quest.value != objectQuestions) {
        answer.innerHTML = "Esta pergunta não esta programada em mim."
        removeHtmlAfter()
    }

    function removeHtmlAfter() {
        setTimeout(() => {
            answer.innerHTML = ""
            Clone_question.innerHTML = ""
            answer.style.transition = "900ms ease"
        }, 6000)
        clearTimeout()
    }

    switch (input_quest.value) {

        case objectQuestions.emptyQuestion:
            answer.innerHTML = "Faça uma pergunta"
            break;

        case objectQuestions.devBrabo:
            arrowMotivation()
            break;

        case objectQuestions.question1:
            answer.innerHTML = "Valoran... Ops, => Minecraft"
            break;

        case objectQuestions.question2:
            answer.innerHTML = "Gabriel, o melhorzin";
            removeHtmlAfter()
            break;

        case objectQuestions.question3:
            answer.innerHTML = "Nescau"

            removeHtmlAfter()
            break;

        case objectQuestions.question4:
            answer.innerHTML = "Valorant, Apex, minecraftttkkk"
            removeHtmlAfter()
            break;

        case objectQuestions.question5:
            answer.innerHTML = "Sim, CONFIA"
            removeHtmlAfter()
            break;

        case objectQuestions.question6:
            answer.innerHTML = "meu oV... => Riot games"
            removeHtmlAfter()
            break;

        case objectQuestions.question7:
            answer.innerHTML = "meu... Ovo "
            removeHtmlAfter()
            break;

        case objectQuestions.question8:
            answer.innerHTML = "Ainda pergunta? O melhor é quem me criou"
            removeHtmlAfter()
            break;

        case objectQuestions.question9:
            answer.innerHTML = "Ps2, sem duvidas hehehehe"
            removeHtmlAfter()
            break;

        case objectQuestions.question10:
            answer.innerHTML = "Ben10, o melhor"
            removeHtmlAfter()
            break;
    }

    if (answer.innerHTML.length > 5) {
        answer.style.fontSize = "1rem";
        answer.style.transition = "900ms ease-in"
    }

    Clone_question.innerHTML = input_quest.value;
    input_quest.value = ""
}