// Aplicacão que responde perguntas relacionadas a jogos.
const input_quest = document.querySelector("#input-quest")
const button_quest = document.querySelector("#button-quest");
const clone_question = document.getElementById("pergunta");
const answer = document.getElementById("resposta");
const imageGame = document.querySelector("#img-game");

const arrowMotivation = () => {
    answer.innerHTML = "Vai sim! Continue estudando que vc vai longe."
}

function askQuestion() {

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
            /* answer.style.opacity = "0"
            clone_question.style.opacity = "0" */
            answer.innerHTML = "";
            clone_question.innerHTML = "";
            answer.style.transition = "900ms ease";
            imageGame.src = "./assets/game.png"
            return;
        }, 5000)
        clearTimeout()
    }

    switch (input_quest.value) {

        case objectQuestions.emptyQuestion:
            answer.innerHTML = "Faça uma pergunta"
            imageGame.src = "https://c.tenor.com/Se0P1hR2f4gAAAAM/suspicious-emoji.gif"
            removeHtmlAfter()
            break;

        case objectQuestions.devBrabo:
            arrowMotivation()
            break;

        case objectQuestions.question1:
            answer.innerHTML = "Valoran... Ops, => Minecraft"
            imageGame.src = "https://c.tenor.com/mqM250ZubZwAAAAC/raze-valorant.gif"
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
            imageGame.src = "https://i.pinimg.com/originals/34/83/b4/3483b4b5e873a4dde26a949d0b63ec99.gif"
            removeHtmlAfter()
            break;

        case objectQuestions.question5:
            answer.innerHTML = "Sim, CONFIA"
            removeHtmlAfter()
            break;

        case objectQuestions.question6:
            answer.innerHTML = "eu"
            imageGame.src = "https://i.pinimg.com/736x/9d/4a/3b/9d4a3b8bece01eb5aef7a78eb0d7be93.jpg"
            removeHtmlAfter()
            break;

        case objectQuestions.question7:
            answer.innerHTML = "Galinha"
            imageGame.src = "https://gifs.eco.br/wp-content/uploads/2021/09/gifs-de-galinha-dancando-0.gif"
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
            imageGame.src = "https://studio.code.org/v3/assets/ES07HvXxl0Az8Wptu0jG_iKwwaxl__jHfmBr3wEEJuA/FakeTeemingGoldfish-max-1mb.gif"
            removeHtmlAfter()
            break;
    }

    if (answer.innerHTML.length > 5) {
        answer.style.fontSize = "1rem";
        answer.style.transition = "900ms ease-in"
    }

    clone_question.innerHTML = input_quest.value;
    input_quest.value = ""

}