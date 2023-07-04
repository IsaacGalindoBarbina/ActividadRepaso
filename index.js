const televisor = {
  power: false,
  Volumen: 3,
  Canal: 7,
  mutear: false
}

function power() {
  if (televisor.power) {
    televisor.power = false;
    televisor.Volumen = 3;
    televisor.Canal = 7;
    televisor.mutear = false;
    console.log("tele apagada");
  } else {
    televisor.power = true;
    console.log("tele encendida");
  }
}

function subirVolumen() {
  if (televisor.power) {
    if (televisor.Volumen >= 10) {
      console.log("Ya es el nivel máximo de volumen");
      televisor.Volumen = 10;
    } else {
      televisor.Volumen++;
      console.log(televisor);
    }
  } else {
    console.log("Enciende la tele primero");
  }
  return televisor;
}

function bajarVolumen() {
  if (televisor.power) {
    if (televisor.Volumen <= 1) {
      console.log("1 es el volumen mínimo");
      televisor.Volumen = 1;
      console.log(televisor);
    } else {
      televisor.Volumen--;
      console.log(televisor);
    }
  } else {
    console.log("Primero enciende la tele");
  }
  return televisor;
}

function subirCanal() {
  if (televisor.power) {
    if (televisor.Canal >= 100) {
      console.log("El canal máximo es 100");
      televisor.Canal = 100;
    } else {
      televisor.Canal++;
      console.log(televisor);
    }
  } else {
    console.log("Enciende la tele primero");
  }
  return televisor;
}

function bajarCanal() {
  if (televisor.power) {
    if (televisor.Canal <= 1) {
      console.log("El canal mínimo es 1");
      televisor.Canal = 1;
      console.log(televisor);
    } else {
      televisor.Canal--;
      console.log(televisor);
    }
  } else {
    console.log("Enciende la tele primero");
  }
  return televisor;
}

function mutear() {
  if (televisor.power) {
    if (televisor.mutear) {
      televisor.mutear = false;
      televisor.Volumen = 3;
      console.log(televisor);
      console.log("Tele con sonido");
    } else {
      televisor.mutear = true;
      televisor.Volumen = 0;
      console.log(televisor);
      console.log("Tele muteada");
    }
  } else {
    console.log("Enciende la tele primero");
  }
  return televisor;
}

power();
subirVolumen();
subirVolumen();
bajarVolumen();
subirCanal();
bajarCanal();
mutear();
