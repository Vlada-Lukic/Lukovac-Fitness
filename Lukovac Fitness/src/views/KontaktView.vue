<script setup>

</script>

<template>
  <body class="bodyKontakt">
      <div>
          <h1>Kontaktirajte me</h1>
      </div>
      <div class="Linkovi">
          <!-- Your social media links go here -->
      </div>
      <p class="text">Ili popunite formular:</p>
      <div class="formular">
          <form>
              <div class="form-field">
                  <label for="name">Ime:</label>
                  <div>
                      <input type="text" id="name" name="FullName" placeholder="Ime">
                  </div>
              </div>
              <div class="form-field">
                  <label for="email">Email:</label>
                  <div>
                      <input type="email" id="email" name="Email" placeholder="Email">
                  </div>
              </div>
              <div class="form-field">
                  <label for="message">Poruka:</label>
                  <div>
                      <textarea name="Enquiry" id="message" cols="30" rows="10" placeholder="Poruka"></textarea>
                      <span class="field-validation-valid" data-valmsg-for="Enquiry"></span>
                  </div>
              </div>
          </form>
      </div>
  </body>
</template>

<style scoped>
.bodyKontakt {
background-image: url(../assets/Butt2.png);
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
  top: 10%;
  left: 65%;
  transform: translateX(-50%);
  text-align: center;
  font-size: 50px;
  font-weight: 500;
}

.formular {
    color: white;
    position: absolute;
    top: 35%;
    left: 42%;
}

.form-field {
    margin-bottom: 10px; /* Adjust the bottom margin as needed */
}

/* Optional: Add styling for input and textarea */
.form-field input,
.form-field textarea {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    box-sizing: border-box;
    background: transparent;
    color: white;
    font-size: 15px;
}
.text{
    color: white;
  position: absolute;
  top: 35%;
  left: 10%;
}


/* Linkovi */
.Linkovi {
  color: white;
  position: absolute;
  top: 20%;
  left: 75%;
}

.Linkovi a {
  display: block;
  margin-bottom: 10px;
}

/* Optional: You can adjust the size of the icons with the fa-lg class */
.Linkovi .fa {
  font-size: 2em; /* Adjust the font-size as needed */
}
</style>
