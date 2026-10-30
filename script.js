
// ======================================
// TECHQUIZ - 90 QUESTION DATABASE
// ======================================

// Question creation helpers
const S = (question, options, answer) => ({
    type: "single", question, options, answer: [answer]
});

const M = (question, options, answer) => ({
    type: "multi", question, options, answer
});

const F = (question, answer) => ({
    type: "fill", question, answer: [answer]
});

const questionBank = {

    // =============== PYTHON ===============
    "Python": [
        S("Which keyword defines a function?", ["function", "def", "fun", "define"], "def"),
        S("Which symbol is used for comments in Python?", ["//", "/*", "#", "--"], "#"),
        S("What is the output of print(2 ** 3)?", ["6", "8", "9", "5"], "8"),
        S("Which data type stores True or False?", ["int", "str", "bool", "float"], "bool"),
        S("Which function gets input from the user?", ["scan()", "input()", "read()", "get()"], "input"),

        M("Which are Python collection data types?", ["List", "Tuple", "Dictionary", "Integer"], ["List", "Tuple", "Dictionary"]),
        M("Which are mutable data types?", ["List", "Tuple", "Dictionary", "String"], ["List", "Dictionary"]),
        M("Which are valid Python loops or control structures?", ["for", "while", "if", "repeat"], ["for", "while", "if"]),
        M("Which are valid Python operators?", ["+", "-", "*", "&&"], ["+", "-", "*"]),
        M("Which methods can be used with Python strings?", ["upper()", "lower()", "replace()", "push()"], ["upper()", "lower()", "replace()"]),

        F("Which keyword is used to define a function?", "def"),
        F("Which function displays output in Python?", "print"),
        F("Which keyword is used to create a class?", "class"),
        F("Which function returns the length of an object?", "len"),
        F("Which keyword is used to handle exceptions?", "try")
    ],

    // =============== JAVA ===============
    "Java": [
        S("Which keyword is used to create a class?", ["class", "Class", "new", "create"], "class"),
        S("Which method is the entry point of Java?", ["start()", "main()", "run()", "execute()"], "main()"),
        S("Which data type stores whole numbers?", ["float", "int", "char", "boolean"], "int"),
        S("Which operator checks equality?", ["=", "==", "!=", "==="], "=="),
        S("Which keyword creates an object?", ["class", "this", "new", "static"], "new"),

        M("Which are Java primitive data types?", ["int", "char", "boolean", "String"], ["int", "char", "boolean"]),
        M("Which are Java access modifiers?", ["public", "private", "protected", "static"], ["public", "private", "protected"]),
        M("Which are OOP concepts?", ["Inheritance", "Polymorphism", "Encapsulation", "Compilation"], ["Inheritance", "Polymorphism", "Encapsulation"]),
        M("Which are looping statements in Java?", ["for", "while", "do-while", "repeat"], ["for", "while", "do-while"]),
        M("Which keywords are related to inheritance or interfaces?", ["extends", "implements", "inherits", "interface"], ["extends", "implements", "interface"]),

        F("Which keyword is used to inherit a class?", "extends"),
        F("Which keyword prevents method overriding?", "final"),
        F("Which keyword refers to the current object?", "this"),
        F("Which package contains the Scanner class?", "java.util"),
        F("Which keyword is used to handle an exception?", "catch")
    ],

    // =============== SQL ===============
    "SQL": [
        S("Which command retrieves data from a table?", ["INSERT", "UPDATE", "SELECT", "DELETE"], "SELECT"),
        S("Which clause filters records?", ["ORDER BY", "WHERE", "GROUP BY", "JOIN"], "WHERE"),
        S("Which command removes a table?", ["DELETE", "REMOVE", "DROP", "CLEAR"], "DROP"),
        S("Which key uniquely identifies each row?", ["Foreign Key", "Primary Key", "Candidate Key", "Alternate Key"], "Primary Key"),
        S("Which clause sorts query results?", ["SORT", "ORDER BY", "GROUP BY", "HAVING"], "ORDER BY"),

        M("Which are SQL aggregate functions?", ["COUNT()", "SUM()", "AVG()", "PRINT()"], ["COUNT()", "SUM()", "AVG()"]),
        M("Which are SQL constraints?", ["PRIMARY KEY", "FOREIGN KEY", "NOT NULL", "ORDER BY"], ["PRIMARY KEY", "FOREIGN KEY", "NOT NULL"]),
        M("Which are SQL JOIN types?", ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "MIDDLE JOIN"], ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN"]),
        M("Which are DML commands?", ["INSERT", "UPDATE", "DELETE", "CREATE"], ["INSERT", "UPDATE", "DELETE"]),
        M("Which are valid SQL data types?", ["INT", "VARCHAR", "DATE", "LOOP"], ["INT", "VARCHAR", "DATE"]),

        F("Which SQL command retrieves records?", "select"),
        F("Which clause filters grouped records?", "having"),
        F("Which command adds a new record?", "insert"),
        F("Which command modifies existing records?", "update"),
        F("Which clause groups rows with the same values?", "group by")
    ],

    // =============== HTML & CSS ===============
    "HTML & CSS": [
        S("Which tag creates a hyperlink?", ["<link>", "<a>", "<href>", "<url>"], "<a>"),
        S("Which tag displays the largest heading?", ["<h6>", "<head>", "<h1>", "<header>"], "<h1>"),
        S("Which CSS property changes text color?", ["font-style", "color", "background", "text-size"], "color"),
        S("Which HTML tag displays an image?", ["<picture>", "<img>", "<image>", "<src>"], "<img>"),
        S("Which CSS property controls text size?", ["font-size", "text-style", "font-weight", "size"], "font-size"),

        M("Which are semantic HTML tags?", ["<header>", "<footer>", "<article>", "<font>"], ["<header>", "<footer>", "<article>"]),
        M("Which are CSS position values?", ["relative", "absolute", "fixed", "middle"], ["relative", "absolute", "fixed"]),
        M("Which are CSS display values?", ["block", "inline", "flex", "bold"], ["block", "inline", "flex"]),
        M("Which HTML tags are used for lists?", ["<ul>", "<ol>", "<li>", "<list>"], ["<ul>", "<ol>", "<li>"]),
        M("Which are ways to apply CSS?", ["Inline", "Internal", "External", "Database"], ["Inline", "Internal", "External"]),

        F("Which HTML tag creates a paragraph?", "p"),
        F("Which HTML attribute specifies an image path?", "src"),
        F("Which CSS property changes the background color?", "background-color"),
        F("Which CSS selector targets an element by ID?", "#"),
        F("Which HTML tag links an external CSS file?", "link")
    ],

    // =============== JAVASCRIPT ===============
    "JavaScript": [
        S("Which keyword declares a block-scoped variable?", ["var", "let", "define", "int"], "let"),
        S("Which method displays a message in the console?", ["print()", "console.log()", "display()", "write()"], "console.log()"),
        S("Which symbol is used for strict equality?", ["=", "==", "===", "!="], "==="),
        S("Which method adds an item to the end of an array?", ["pop()", "push()", "shift()", "slice()"], "push()"),
        S("Which value represents the absence of a value?", ["undefined", "null", "NaN", "Both null and undefined"], "Both null and undefined"),

        M("Which are JavaScript data types?", ["String", "Number", "Boolean", "HTML"], ["String", "Number", "Boolean"]),
        M("Which are JavaScript loop structures?", ["for", "while", "do-while", "repeat"], ["for", "while", "do-while"]),
        M("Which are array methods?", ["map()", "filter()", "reduce()", "print()"], ["map()", "filter()", "reduce()"]),
        M("Which are JavaScript comparison operators?", ["==", "===", ">", "=>"], ["==", "===", ">"]),
        M("Which events can occur in a browser?", ["click", "mouseover", "keydown", "compile"], ["click", "mouseover", "keydown"]),

        F("Which keyword declares a constant?", "const"),
        F("Which method converts JSON text into a JavaScript object?", "json.parse()"),
        F("Which method selects an element by its ID?", "getelementbyid()"),
        F("Which keyword is used to create a class?", "class"),
        F("Which method removes the last array element?", "pop()")
    ],

    // =============== COMPUTER FUNDAMENTALS ===============
    "Computer Fundamentals": [
        S("What is called the brain of a computer?", ["RAM", "CPU", "Monitor", "Keyboard"], "CPU"),
        S("Which memory is volatile?", ["ROM", "Hard Disk", "RAM", "SSD"], "RAM"),
        S("What does URL stand for?", ["Uniform Resource Locator", "Universal Record Link", "Uniform Read Language", "User Resource Link"], "Uniform Resource Locator"),
        S("Which device is used to print documents?", ["Scanner", "Monitor", "Printer", "Mouse"], "Printer"),
        S("Which number system uses only 0 and 1?", ["Decimal", "Binary", "Octal", "Hexadecimal"], "Binary"),

        M("Which are input devices?", ["Keyboard", "Mouse", "Scanner", "Monitor"], ["Keyboard", "Mouse", "Scanner"]),
        M("Which are output devices?", ["Monitor", "Printer", "Speaker", "Keyboard"], ["Monitor", "Printer", "Speaker"]),
        M("Which are operating systems?", ["Windows", "Linux", "macOS", "HTML"], ["Windows", "Linux", "macOS"]),
        M("Which are storage devices?", ["SSD", "Hard Disk", "Pen Drive", "CPU"], ["SSD", "Hard Disk", "Pen Drive"]),
        M("Which are programming languages?", ["Python", "Java", "C++", "HTML"], ["Python", "Java", "C++"]),

        F("What does CPU stand for?", "central processing unit"),
        F("What does RAM stand for?", "random access memory"),
        F("What does ROM stand for?", "read only memory"),
        F("What does USB stand for?", "universal serial bus"),
        F("What does WWW stand for?", "world wide web")
    ]
};


// ======================================
// QUIZ VARIABLES
// ======================================

let questions = [];
let currentQuestion = 0;
let score = 0;
let selectedAnswers = [];
let userAnswers = [];
let timeLeft = 600;
let timerInterval;
let quizFinished = false;


// ======================================
// RANDOM SHUFFLE FUNCTION
// ======================================

function shuffleArray(array) {

    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] =
        [shuffled[j], shuffled[i]];
    }

    return shuffled;
}


// ======================================
// HTML ELEMENTS
// ======================================

const home = document.getElementById("home");
const quiz = document.getElementById("quiz");
const result = document.getElementById("result");


// ======================================
// START QUIZ
// ======================================

function startQuiz(category) {

    // Shuffle all 15 questions
    questions = shuffleArray(questionBank[category])
        .map(q => ({
            ...q,
            options: q.options ? shuffleArray(q.options) : undefined
        }));

    currentQuestion = 0;
    score = 0;
    userAnswers = [];
    timeLeft = 600;
    quizFinished = false;

    home.classList.add("hidden");
    result.classList.add("hidden");
    quiz.classList.remove("hidden");

    document.getElementById("category").textContent =
        "📚 " + category;

    clearInterval(timerInterval);

    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);

    showQuestion();
}


// ======================================
// DISPLAY QUESTION
// ======================================

function showQuestion() {

    selectedAnswers = [];

    const q = questions[currentQuestion];

    document.getElementById("question-count").textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    document.getElementById("question").textContent =
        q.question;

    document.getElementById("question-type").textContent =
        q.type === "single"
        ? "Select ONE correct answer"
        : q.type === "multi"
        ? "Select ALL correct answers"
        : "Fill in the blank";

    document.getElementById("progress").style.width =
        ((currentQuestion / questions.length) * 100) + "%";

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    if (q.type === "fill") {

        const input = document.createElement("input");

        input.type = "text";
        input.id = "fill-answer";
        input.placeholder = "Enter your answer...";
        input.autocomplete = "off";

        optionsDiv.appendChild(input);

    } else {

        q.options.forEach(option => {

            const button = document.createElement("button");

            button.textContent = option;
            button.className = "option";

            button.onclick = () => selectAnswer(option, button);

            optionsDiv.appendChild(button);
        });
    }

    document.getElementById("next-btn").textContent =
        currentQuestion === questions.length - 1
        ? "Finish Quiz ✓"
        : "Next Question →";
}


// ======================================
// SELECT ANSWER
// ======================================

function selectAnswer(option, button) {

    const q = questions[currentQuestion];

    if (q.type === "single") {

        selectedAnswers = [option];

        document.querySelectorAll(".option").forEach(btn => {
            btn.classList.remove("selected");
        });

        button.classList.add("selected");

    } else {

        if (selectedAnswers.includes(option)) {

            selectedAnswers = selectedAnswers.filter(
                answer => answer !== option
            );

            button.classList.remove("selected");

        } else {

            selectedAnswers.push(option);
            button.classList.add("selected");
        }
    }
}


// ======================================
// CHECK ANSWERS
// ======================================

function checkAnswer(user, correct) {

    if (user.length !== correct.length) return false;

    const normalize = value =>
        String(value).trim().toLowerCase();

    return [...user].map(normalize).sort().join("|") ===
           [...correct].map(normalize).sort().join("|");
}


// ======================================
// NEXT QUESTION
// ======================================

function nextQuestion() {

    if (quizFinished) return;

    const q = questions[currentQuestion];

    let answer = [];

    if (q.type === "fill") {

        const input = document.getElementById("fill-answer");

        answer = [input.value.trim()];

    } else {

        answer = [...selectedAnswers];
    }

    userAnswers[currentQuestion] = answer;

    if (checkAnswer(answer, q.answer)) {
        score++;
    }

    if (currentQuestion < questions.length - 1) {

        currentQuestion++;
        showQuestion();

    } else {

        finishQuiz();
    }
}


// ======================================
// TIMER
// ======================================

function updateTimer() {

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    document.getElementById("timer").textContent =
        `⏱ ${minutes}:${String(seconds).padStart(2, "0")}`;

    if (timeLeft <= 0) {

        finishQuiz();
        return;
    }

    timeLeft--;
}


// ======================================
// FINISH QUIZ
// ======================================

function finishQuiz() {

    if (quizFinished) return;

    quizFinished = true;

    clearInterval(timerInterval);

    quiz.classList.add("hidden");
    result.classList.remove("hidden");

    const total = questions.length;
    const percentage = Math.round((score / total) * 100);

    document.getElementById("score").textContent =
        `${score}/${total}`;

    document.getElementById("percentage").textContent =
        `You scored ${percentage}%`;

    document.getElementById("message").textContent =
        percentage >= 80 ? "Excellent! 🌟" :
        percentage >= 50 ? "Good Job! 👏" :
        "Keep Practicing! 💪";

    showReview();
}


// ======================================
// ANSWER REVIEW
// ======================================

function showReview() {

    const review = document.getElementById("review");

    review.innerHTML = "<h3>Answer Review</h3>";

    questions.forEach((q, index) => {

        const correct = checkAnswer(
            userAnswers[index] || [],
            q.answer
        );

        const user = userAnswers[index]?.join(", ") || "Not answered";

        const item = document.createElement("div");
        item.className = "review-item";

        const title = document.createElement("strong");
        title.textContent = `${index + 1}. ${q.question}`;

        const userText = document.createElement("p");
        userText.textContent = `Your answer: ${user}`;

        const correctText = document.createElement("p");
        correctText.textContent =
            `Correct answer: ${q.answer.join(", ")}`;

        const status = document.createElement("p");
        status.textContent = correct ? "✅ Correct" : "❌ Incorrect";

        item.append(title, userText, correctText, status);

        review.appendChild(item);
    });
}


// ======================================
// GO BACK HOME
// ======================================

function goHome() {

    clearInterval(timerInterval);

    quiz.classList.add("hidden");
    result.classList.add("hidden");
    home.classList.remove("hidden");

    document.getElementById("progress").style.width = "0%";
}
