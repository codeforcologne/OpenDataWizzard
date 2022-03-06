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

function showTabs(tabIds) {
  console.log('showing tabs', tabIds);

  // hide all tabs
  document.querySelectorAll('.tab').forEach(el => {
    el.classList.remove('show');
  });

  // deactive all circles
  document.querySelectorAll('.step').forEach(el => {
    el.classList.remove('active');
  });

  for (var tabId of tabIds) {
    // show tab
    document.getElementById(tabId).classList.add('show');

    // set step circle to `active`
    if (tabId.startsWith('tab_')) {
      document.getElementById(tabId.replace('tab_', 'step_')).classList.add('active');
    }
  }
}

function showTab(tabId) {
  showTabs([tabId]);
}

function step(tab, val) {
  if (tab === 'tab_0') { // einführung
    document.getElementById('step_0').className += ' completed';
    showTab('tab_1');
  } else if (tab === 'tab_1') { // daten
    daten_andere_rechte = (val === 'yes');
    if (daten_andere_rechte) {
      document.getElementById('step_1').className += ' completed red';
      showTabs(['data_other_rights_div', 'links', 'repeat']);
    } else {
      document.getElementById('step_1').className += ' completed green';
      showTab('tab_2');
    }

  } else if (tab === 'tab_2') { //  datensätze
    daten_urhg = (val === 'yes');
    document.getElementById('step_2').className += ' completed green';
    showTab('tab_3');
  }
  else if (tab === 'tab_3') { // datenbank
    datenbank = (val === 'yes');
    document.getElementById('step_3').className += ' completed green';
    showTab('tab_4');
  } else if (tab === 'tab_4') { // datenbankwerk
    datenbankwerk = (val === 'yes');
    document.getElementById('step_4').className += ' completed green';
    showTabs(['links', 'infos', 'repeat']);

    if (
      daten_urhg === false &&
      datenbank === false &&
      datenbankwerk === false) {
        // daten
        document.getElementById('data').style.display = 'block';
    } else if (
      daten_urhg === true &&
      datenbank === false &&
      datenbankwerk === false) {
        // daten urhg
        document.getElementById('data_urhg').style.display = 'block';
    } else if (
      daten_urhg === false &&
      datenbank === true &&
      datenbankwerk === false) {
        // daten & datenbank
        document.getElementById('data_database').style.display = 'block';
    } else if (
      daten_urhg === true &&
      datenbank === true &&
      datenbankwerk === false) {
        // daten urhg & datenbank
        document.getElementById('data_urhg_database').style.display = 'block';
    } else if (
      daten_urhg === false &&
      datenbankwerk === true) {
        // daten & datenbankwerk
        document.getElementById('data_database_work').style.display = 'block';
    } else if (
      daten_urhg === true &&
      datenbankwerk === true) {
        // daten urgh & datenbankwerk
        document.getElementById('data_urhg_database_work').style.display = 'block';
    }
  }
}
