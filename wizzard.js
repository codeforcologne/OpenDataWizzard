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

function step(tab, val) {
    // einführung
    if (tab === 'tab_0') {
        document.getElementById('tab_0').style.display = 'none';
        document.getElementById('tab_1').style.display = 'block';
        document.getElementById('intro').style.display = 'none';
        document.getElementById('step_0').className +=
            ' finish active';
        // daten
    } else if (tab === 'tab_1') {
        document.getElementById('tab_1').style.display = 'none';
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
            document.getElementById('step_1').className +=
                ' finishred active';
        } else {
            document.getElementById('step_1').className +=
                ' finish active';
        }
        document.getElementById('tab_2').style.display = 'block';

        //  datensätze
    } else if (tab === 'tab_2') {
        document.getElementById('tab_2').style.display = 'none';
        document.getElementById('tab_3').style.display = 'block';
        if (val === 'yes') {
            daten_urhg = true;
        }
        document.getElementById('step_2').className +=
            ' finish active';
    }
    // datenbank
    else if (tab === 'tab_3') {
        document.getElementById('tab_3').style.display = 'none';
        document.getElementById('tab_4').style.display = 'block';
        document.getElementById('step_3').className +=
            ' finish active';
        if (val === 'yes') {
            datenbank = true;
        }
        // datenbankwerk
    } else if (tab === 'tab_4') {
        if (val === 'yes') {
            datenbankwerk = true;
        }
        document.getElementById('tab_4').style.display = 'none';
        document.getElementById('step_4').className +=
            ' finish active';

        // daten andere rechte

        if (daten_andere_rechte === true) {
            document.getElementById(
                'data_other_rights_div',
            ).style.display = 'block';
            document.getElementById('links').style.display =
                'block';
            const steps = document.getElementsByClassName('step');
            for (let i = 0; i < steps.length; i++) {
                steps[i].className += ' finishred active';
            }
        }

        // daten
        else if (
            daten_urhg === false &&
            datenbank === false &&
            datenbankwerk === false
        ) {
            document.getElementById('data').style.display = 'block';
            document.getElementById('infos').style.display =
                'block';
            document.getElementById('links').style.display =
                'block';
        }
        // daten urhg
        else if (
            daten_urhg === true &&
            datenbank === false &&
            datenbankwerk === false
        ) {
            document.getElementById('data_urhg').style.display =
                'block';
            document.getElementById('infos').style.display =
                'block';
            document.getElementById('links').style.display =
                'block';
        }

        // daten & datenbank
        else if (
            daten_urhg === false &&
            datenbank === true &&
            datenbankwerk === false
        ) {
            document.getElementById('data_database').style.display =
                'block';
            document.getElementById('infos').style.display =
                'block';
            document.getElementById('links').style.display =
                'block';
        }

        // daten urhg & datenbank
        else if (
            daten_urhg === true &&
            datenbank === true &&
            datenbankwerk === false
        ) {
            document.getElementById(
                'data_urhg_database',
            ).style.display = 'block';
            document.getElementById('infos').style.display =
                'block';
            document.getElementById('links').style.display =
                'block';
        }

        // daten & datenbankwerk
        else if (daten_urhg === false && datenbankwerk === true) {
            document.getElementById(
                'data_database_work',
            ).style.display = 'block';
            document.getElementById('infos').style.display =
                'block';
            document.getElementById('links').style.display =
                'block';
        }

        // daten urgh & datenbankwerk
        else if (daten_urhg === true && datenbankwerk === true) {
            document.getElementById(
                'data_urhg_database_work',
            ).style.display = 'block';
            document.getElementById('infos').style.display =
                'block';
            document.getElementById('links').style.display =
                'block';
        }
    }
}
