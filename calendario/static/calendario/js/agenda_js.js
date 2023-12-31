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

    // Limpe o conteúdo atual da tabela
    tableDays.innerHTML = "";

    for (let i = -firstDayOfWeek, index = 0; i < getLastDayThisMonth; i++, index++) {
      let dt = new Date(ano, mes, i);
      let dtNow = new Date();

      let dayTable = document.createElement("td");
      dayTable.textContent = i > 0 ? dt.getDate() : "";

      // Adicione as classes conforme necessário
      dayTable.classList.add("dias-mes");
      if (isSameDay(dt, dtNow)) {
        dayTable.classList.add("dia-atual");
      }
      if (i < 1) {
        dayTable.classList.add("mes-anterior");
      }
      if (i >= getLastDayThisMonth - 1) {
        dayTable.classList.add("proximo-mes");
      }

      // Adicione o elemento ao corpo da tabela
      tableDays.appendChild(dayTable);
    }
  }

  function isSameDay(date1, date2) {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
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
