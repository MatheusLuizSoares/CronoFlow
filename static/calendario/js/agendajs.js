document.addEventListener("DOMContentLoaded", function () {
  const monthsBr = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
  ];

  const tableDays = document.getElementById("dias");

  function GetDaysCalendar(mes, ano) {
    const mesElement = document.getElementById("mes");
    const anoElement = document.getElementById("ano");

    if (!mesElement || !anoElement || !tableDays) {
      console.error("Elementos não encontrados");
      return;
    }

    mesElement.innerHTML = monthsBr[mes];
    anoElement.innerHTML = ano;

    let firstDayOfWeek = new Date(ano, mes, 1).getDay();
    let getLastDayThisMonth = new Date(ano, mes + 1, 0).getDate();

    for (let i = -firstDayOfWeek, index = 0; i < getLastDayThisMonth; i++, index++) {
      let dt = new Date(ano, mes, i);
      let dtNow = new Date();
      let dayTable = tableDays.getElementsByTagName("td")[index];

      if (dayTable) {
        dayTable.classList.remove("mes-anterior");
        dayTable.classList.remove("proximo-mes");
        dayTable.classList.remove("dia-atual");
        dayTable.innerHTML = i > 0 ? dt.getDate() : "";
      
        if (dt.getFullYear() === dtNow.getFullYear() && dt.getMonth() === dtNow.getMonth() && dt.getDate() === dtNow.getDate()) {
          dayTable.classList.add("dia-atual");
        }
      
        if (i < 1) {
          dayTable.classList.add("mes-anterior");
        }
      
        if (i >= getLastDayThisMonth - 1) {
          dayTable.classList.add("proximo-mes");
        }
      }
    }      
  }

  let now = new Date();
  let mes = now.getMonth();
  let ano = now.getFullYear();
  GetDaysCalendar(mes, ano);

  const botao_proximo = document.getElementById("btn_proximo");
  const botao_anterior = document.getElementById("btn_anterior");

  if (botao_proximo && botao_anterior) {
    botao_proximo.onclick = function () {
      mes++;
      if (mes > 11) {
        mes = 0;
        ano++;
      }
      GetDaysCalendar(mes, ano);
    };

    botao_anterior.onclick = function () {
      mes--;
      if (mes < 0) {
        mes = 11;
        ano--;
      }
      GetDaysCalendar(mes, ano);
    };
  } else {
    console.error("Botões não encontrados");
  }
});

