<script setup>
import { ref } from 'vue';

const isQuizOpen = ref(false);
const isCalculatingResults = ref(false);
const currentQuestionIndex = ref(0);
const selectedOption = ref(null);
const heightInCm = ref(null);
const weightInKg = ref(null);
const bmiResult = ref(null);

const questions = [
  {
    question: 'How would you describe your physical build?',
    options: ['slim', 'mid-sized', 'heavy', 'overweight'],
  },
  {
    question: 'What is your main goal?',
    options: ['lose weight', 'increase muscle strength', 'develop flexibility', 'improve posture'],
  },
  {
    question: 'What is your dream body?',
    options: ['Thin', 'Toned', 'Curvy', 'Just a few sizes smaller'],
  },
  {
    question: 'What are your target zones?',
    options: ['Belly', 'Butt', 'Chest', 'Legs'],
  },
  {
    question: 'How flexible are you?',
    options: ['Pretty flexible', 'Just getting started', 'Not that good', 'Not sure'],
  },
  {
    question: 'How tall are you?',
    inputType: 'number',
    unit: 'cm',
  },
  {
    question: 'What is your current weight?',
    inputType: 'number',
    unit: 'kg',
  },
  // Add more questions here...
];

const openBMIQuiz = () => {
  isQuizOpen.value = true;
};

const nextQuestion = () => {
  if (isValidInput()) {
    currentQuestionIndex.value++;

    if (currentQuestionIndex.value === questions.length) {
      isCalculatingResults.value = true;
      setTimeout(() => {
        calculateBMIResults();
        isCalculatingResults.value = false;
      }, 2000);
    }
  } else {
    alert('Please enter a valid number for height and weight.');
  }
};

const isValidInput = () => {
  if (currentQuestionIndex.value < questions.length) {
    if (questions[currentQuestionIndex.value].inputType === 'number') {
      return (
        (questions[currentQuestionIndex.value].unit === 'cm' &&
          heightInCm.value !== null &&
          !isNaN(parseFloat(heightInCm.value))) ||
        (questions[currentQuestionIndex.value].unit === 'kg' &&
          weightInKg.value !== null &&
          !isNaN(parseFloat(weightInKg.value)))
      );
    } else {
      return selectedOption.value !== null;
    }
  }
  return false;
};

const calculateBMIResults = () => {
  const height = parseFloat(heightInCm.value) / 100; // convert height to meters
  const weight = parseFloat(weightInKg.value);
  const bmi = (weight / (height * height)).toFixed(1);
  bmiResult.value = bmi;
};

const handleInput = (event) => {
  if (questions[currentQuestionIndex.value].unit === 'cm') {
    heightInCm.value = event.target.value;
  } else {
    weightInKg.value = event.target.value;
  }
};
const getPlaceholder = () => {
  if (currentQuestionIndex.value < questions.length) {
    if (questions[currentQuestionIndex.value].unit === 'cm') {
      return 'Enter your height';
    } else if (questions[currentQuestionIndex.value].unit === 'kg') {
      return 'Enter your weight';
    }
  }
  return '';
};
</script>

<template>
  <body class="bmicalculator">
    <div>
      <h1>BMI CALCULATOR</h1>
      <button @click="openBMIQuiz">Calculate your BMI</button>

      <div v-if="isQuizOpen" class="modal">
        <template v-if="currentQuestionIndex < questions.length">
          <h2>{{ questions[currentQuestionIndex].question }}</h2>
          <template v-if="questions[currentQuestionIndex].inputType === 'number'">
            <input
              :value="questions[currentQuestionIndex].unit === 'cm' ? heightInCm : weightInKg"
              @input="handleInput"
              :type="questions[currentQuestionIndex].inputType"
              :placeholder="getPlaceholder()"
            />
          </template>
          <template v-else>
            <div v-for="(option, index) in questions[currentQuestionIndex].options" :key="index">
              <input type="radio" :id="index" :value="option" v-model="selectedOption" />
              <label :for="index">{{ option }}</label>
            </div>
          </template>
          <button class="nextQuestion" @click="nextQuestion">Next</button>
        </template>

        <template v-else-if="isCalculatingResults">
          <h2>Calculating results...</h2>
        </template>

        <template v-else>
          <h2>Your BMI result is: {{ bmiResult }}</h2>
        </template>
      </div>
    </div>
  </body>
</template>

<style scoped>
.bmicalculator {
  background-image: url(../assets/Butt.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 90vh;
  width: 30%;
  border-radius: 250px 10px 250px 10px;
  margin-left: 10%;
  position: absolute;
  top: 5%;
  left: 50%;
}

h1 {
  color: white;
  position: absolute;
  top: 1%;
  left: 55%;
  transform: translateX(-50%);
  text-align: center;
  font-size: 30px;
  font-weight: 500;
}

label {
  display: block;
  margin-top: 10px;
  color: white;
}

input {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
}

button {
  width: 100%;
  padding: 10px;
  margin-top: 450%;
  margin-left: 150%;
  background-color: #4CAF50;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

p {
  color: white;
  margin-top: 10px;
}

/* KVIZ MODAL */
.modal {
  position: fixed;
  top: 20%;
  left: 20%;
  background-color: black;
  height: 40%;
  width: 30%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center content horizontally */
  justify-content: center; /* Center content vertically */
}

.nextQuestion {
  width: 20%;
  padding: 10px;
  margin-top: 4%;
  margin-left: 30%;
  background-color: #4CAF50;
  color: white;
  cursor: pointer;
}

/* Add the following styles for question and options */
h2 {
  margin-bottom: 20px;
}

div > label {
  display: block;
  margin-top: 10px;
  color: white;
}

div > input {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
}
</style>
