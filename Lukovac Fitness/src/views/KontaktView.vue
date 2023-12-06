<script setup>

</script>

<template>
    <body class="bodyKontakt">
         
<div>
 <h1>Kontaktirajte me</h1>
</div>
<div class="Linkovi">
      <a href="https://www.instagram.com/w211_o_o/">
        <i class="fa fa-instagram fa-lg" aria-hidden="true"></i>
      </a>
      <a href="">
        <i class="fa fa-envelope-o fa-lg" aria-hidden="true"></i>
      </a>
      <a href="">
        <i class="fa fa-facebook-official fa-lg" aria-hidden="true"></i>
      </a>
      <a href="">
        <i class="fa fa-mobile fa-lg" aria-hidden="true"></i>
      </a>
    </div>
<p class="text">Ili popunite formular:</p>
<div class="formular">
    <div class="form-field">
        <div>
            <input type="text" id="name" name="FullName" placeholder="Ime">
        </div>
    </div>
    <div class="form-field">
        <div>
            <input type="text" id="email" name="Email" placeholder="Email">
        </div>
    </div>
    <div class="form-field">
        <div>
            <textarea name="Enquiry" id="message" cols="30" rows="10" placeholder="Poruka"></textarea>
            <!-- Ovaj deo proveriti za validaciju -->
            <span class="field-validation-valid" data-valmsg-for="Enquiry"></span> 
        </div>
    </div>
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
/*.Linkovi{
  color: white;
  position: absolute;
  top: 20%;
  left: 75%;
}*/
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
