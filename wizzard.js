let daten_andere_rechte = false;
let daten_urhg = false;
let datenbank = false;
let datenbankwerk = false;

function showImpress() {
  document.getElementById('impressDiv').style.display = 'block';
  document.getElementById('wizzardDiv').style.display = 'none';
}
function closeImpress() {
  document.getElementById('impressDiv').style.display = 'none';
  document.getElementById('wizzardDiv').style.display = 'block';
}
function showTab(tabId) {
    console.log('showing tab', tabId);
    document.querySelectorAll('.tab').forEach(el => {
        console.log(el);
        el.classList.remove('show');
    });

    document.getElementById(tabId).classList.add('show');
}

function step(tab, val) {
  if (tab === 'tab_0') { // einführung
    document.getElementById('step_0').className += ' finish active';
    showTab('tab_1');
  } else if (tab === 'tab_1') { // daten
    if (val === 'yes') {
      /*
      document.getElementById(
        'data_other_rights_div',
      ).style.display = 'block';
      document.getElementById('links').style.display =
      'block';
      const steps = document.getElementsByClassName('step');
      for (let i = 0; i < steps.length; i++) {
        steps[i].className += ' finishred active';
      }
      */
      daten_andere_rechte = true;
      document.getElementById('step_1').className += ' finishred active';
    } else {
      document.getElementById('step_1').className += ' finish active';
    }
    showTab('tab_2');

  } else if (tab === 'tab_2') { //  datensätze
    daten_urhg = (val === 'yes');
    document.getElementById('step_2').className += ' finish active';
    showTab('tab_3');
  }
  else if (tab === 'tab_3') { // datenbank
    datenbank = (val === 'yes');
    document.getElementById('step_3').className += ' finish active';
    showTab('tab_4');
  } else if (tab === 'tab_4') { // datenbankwerk
    datenbankwerk = (val === 'yes');
    showTab('links');
    document.getElementById('step_4').className += ' finish active';

    if (daten_andere_rechte === true) { // daten andere rechte
      document.getElementById('data_other_rights_div').style.display = 'block';
      const steps = document.getElementsByClassName('step');
      for (let i = 0; i < steps.length; i++) {
        steps[i].className += ' finishred active';
      }
    } else if (
      daten_urhg === false &&
      datenbank === false &&
      datenbankwerk === false
    ) { // daten
      document.getElementById('data').style.display = 'block';
      document.getElementById('infos').style.display = 'block';
    }
    else if (
      daten_urhg === true &&
      datenbank === false &&
      datenbankwerk === false
    ) { // daten urhg
      document.getElementById('data_urhg').style.display = 'block';
      document.getElementById('infos').style.display = 'block';
    } else if (
      daten_urhg === false &&
      datenbank === true &&
      datenbankwerk === false
    ) { // daten & datenbank
      document.getElementById('data_database').style.display = 'block';
      document.getElementById('infos').style.display = 'block';
    } else if (
      daten_urhg === true &&
      datenbank === true &&
      datenbankwerk === false
    ) { // daten urhg & datenbank
      document.getElementById('data_urhg_database').style.display = 'block';
      document.getElementById('infos').style.display = 'block';
    } else if (daten_urhg === false && datenbankwerk === true) { // daten & datenbankwerk
      document.getElementById('data_database_work').style.display = 'block';
      document.getElementById('infos').style.display = 'block';
    } else if (daten_urhg === true && datenbankwerk === true) { // daten urgh & datenbankwerk
      document.getElementById('data_urhg_database_work').style.display = 'block';
      document.getElementById('infos').style.display = 'block';
    }
  }
}
