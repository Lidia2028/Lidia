// Функция для обработки ответов и расчета CO2
function submitAnswers() {
    // Получаем значения ответов с формы

    const question1 = document.querySelector('input[name="question1"]:checked');
    const question2 = document.querySelector('input[name="question2"]:checked');
    const question3 = document.querySelector('input[name="question3"]:checked');
    const question4 = document.querySelector('input[name="question4"]:checked');
    const question5 = document.querySelector('input[name="question5"]:checked');
    const question6 = document.querySelector('input[name="question6"]:checked');
    const question7 = document.querySelector('input[name="question7"]:checked');
    const question8 = document.querySelector('input[name="question8"]:checked');
    const question9 = document.querySelector('input[name="question9"]:checked');
    const question10 = document.querySelector('input[name="question10"]:checked');
    const question11 = document.querySelector('input[name="question11"]:checked');
    const question12 = document.querySelector('input[name="question12"]:checked');
    const question13 = document.querySelector('input[name="question13"]:checked');
    const question14 = document.querySelector('input[name="question14"]:checked');
    const question15 = document.querySelector('input[name="question15"]:checked');
    const question16 = document.querySelector('input[name="question16"]:checked');
    const question17 = document.querySelector('input[name="question17"]:checked');
    const question18 = document.querySelector('input[name="question18"]:checked');
    const question19 = document.querySelector('input[name="question19"]:checked');
    const question20 = document.querySelector('input[name="question20"]:checked');
    const question21 = document.querySelector('input[name="question21"]:checked');
    const question22 = document.querySelector('input[name="question22"]:checked');
    const question23 = document.querySelector('input[name="question23"]:checked');
    const question24 = document.querySelector('input[name="question24"]:checked');
    const question25 = document.querySelector('input[name="question25"]:checked');
    const question26 = document.querySelector('input[name="question26"]:checked');
    const question27 = document.querySelector('input[name="question27"]:checked');
    const question28 = document.querySelector('input[name="question28"]:checked');
    const question29 = document.querySelector('input[name="question29"]:checked');

    // Проверяем, выбраны ли ответы
    if (!question1 || !question2 || !question3 || !question4 || !question5 || !question6 || !question7 || !question8 || !question9 || !question10 || !question11 || !question12 || !question13 || !question14 || !question15 || !question16 || !question17 || !question18 || !question19 || !question20 || !question21 || !question22 || !question23 || !question24 || !question25 || !question26 || !question27 || !question28 || !question29) {
        alert("Пожалуйста, ответьте на все вопросы!");
        return;
    }

    // Сохраняем ответы в localStorage
    const answers = {
        question1: question1.value,
        question2: question2.value,
        question3: question3.value,
        question4: question4.value,
        question5: question5.value,
        question6: question6.value,
        question7: question7.value,
        question8: question8.value,
        question9: question9.value,
        question10: question10.value,
        question11: question11.value,
        question12: question12.value,
        question13: question13.value,
        question14: question14.value,
        question15: question15.value,
        question16: question16.value,
        question17: question17.value,
        question18: question18.value,
        question19: question19.value,
        question20: question20.value,
        question21: question21.value,
        question22: question22.value,
        question23: question23.value,
        question24: question24.value,
        question25: question25.value,
        question26: question26.value,
        question27: question27.value,
        question28: question28.value,
        question29: question29.value
    };

    localStorage.setItem("quizAnswers", JSON.stringify(answers));

    // Переходим на страницу с результатами
    window.location.href = "results.html";
}

// Функция для вычисления CO2 и вывода результатов
function displayResults() {
    const answers = JSON.parse(localStorage.getItem("quizAnswers"));
    if (!answers) {
        alert("Ошибка: Ответы не найдены.");
        return;
    }

    let totalCO2 = 0;
    let advice = '';

    // Рассчитываем выбросы CO2 по первому вопросу
    if (answers.question1 === 'Нет') {
        totalCO2 += 500;
        advice += "Вы не сортируете мусор, что может привести к высоким выбросам CO₂. Попробуйте начать сортировать! ";
    } else if (answers.question1 === 'Иногда') {
        totalCO2 += 350;
        advice += "Вы иногда сортируете мусор, но можно улучшить результаты, если будете делать это регулярно. ";
    } else if (answers.question1 === 'Да!') {
        totalCO2 += 100;
        advice += "Вы сортируете мусор, что снижает выбросы CO₂. Отличная привычка! ";
    }

    // Рассчитываем выбросы CO2 по второму вопросу
    if (answers.question2 === 'Почти не использую') {
        totalCO2 += 100;
        advice += "Попробуйте заменить одноразовые предметы на многоразовые — это поможет уменьшить выбросы CO₂. ";
    } else if (answers.question2 === 'Стараюсь заменять') {
        totalCO2 += 75;
        advice += "Вы стараетесь использовать многоразовые изделия — это снижает выбросы CO₂, продолжайте в том же духе. ";
    } else if (answers.question2 === 'На постоянной основе') {
        totalCO2 += 50;
        advice += "Вы активно используете многоразовые изделия, что значительно снижает выбросы CO₂. Отлично! ";
    }

    if (answers.question3 === "Никогда") {
        totalCO2 += 100;
        advice += "Попробуйте заменить бумажные счета и чеки на электронные версии. Это сократит количество ненужной бумаги, а сдача макулатуры станет следующим логичным шагом.";
    } else if (answers.question3 === 'Иногда') {
        totalCO2 += 75;
        advice += "Установите в доме отдельную коробку для ненужных бумаг и газет. Как только она заполнится — сдавайте в пункт переработки. Это удобно и помогает природе!";
    } else if (answers.question3 === 'Регулярно') {
        totalCO2 += 50;
        advice += "Молодец, что регулярно сдаёте макулатуру! Это важный шаг к уменьшению количества мусора и сохранению природных ресурсов.";
    }

    if (answers.question4 === "Никогда") {
        totalCO2 += 100;
        advice += "Попробуйте сначала продать ненужные вещи на сайтах вторичного использования (Avito, Vinted). Если продать не удалось — сдайте в фонд или переработку.";
    } else if (answers.question4 === 'Иногда') {
        totalCO2 += 75;
        advice += "Раз в сезон проводите чистку гардероба — если вещь не надевалась год, вероятно, она уже не понадобится. Отдайте её тому, кто действительно в ней нуждается.";
    } else if (answers.question4 === 'Регулярно') {
        totalCO2 += 50;
        advice += "Прекрасно, что вы регулярно отдаёте вещи на благотворительность! Это помогает не только людям, но и способствует меньшему потреблению и переработке.";
    }

    if (answers.question5 === "Регулярно") {
        totalCO2 += 300;
        advice += "Вы часто разжигаете огонь/камин. Если есть возможность, установите печь с высокой энергоэффективностью или используйте брикеты из отходов древесины, которые выделяют меньше CO₂.";
    } else if (answers.question5 === 'Иногда') {
        totalCO2 += 200;
        advice += "Используйте сухие дрова, они горят эффективнее и выделяют меньше дыма. А ещё лучше — попробуйте альтернативное отопление, например, газовые или инфракрасные обогреватели.";
    } else if (answers.question5 === 'Почти никогда') {
        totalCO2 += 100;
        advice += "Вы редко разжигаете костер/камин, отлично! Если все же разжигаете то, используйте экологичные дрова, чтобы минимизировать выбросы.";
    }

    if (answers.question6 === "20+ минут") {
        totalCO2 += 150;
    } else if (answers.question6 === '10–20 минут') {
        totalCO2 += 100;
    } else if (answers.question6 === 'До 10 минут') {
        totalCO2 += 50;
    }

    if (answers.question7 === "Нет") {
        totalCO2 += 100;
        advice += "Представьте, что за каждую минуту работы крана вы теряете бутылку воды! Выключение крана — маленький шаг, но с большим эффектом.";
    } else if (answers.question7 === 'Иногда') {
        totalCO2 += 75;
        advice += "Поставьте стакан с водой рядом с раковиной. Используйте его для полоскания рта вместо того, чтобы оставлять кран открытым."
    } else if (answers.question7 === 'Да, всегда') {
        totalCO2 += 50;
        advice += "Вы выключаете воду при умывании, отлично! Такие маленькие привычки имеют огромное значение для экономии ресурсов.";
    }

    if (answers.question8 === "Регулярно") {
        totalCO2 += 100;
        advice += "Вы любитель одноразвых бутылок и сумок, начните с одной многоразовой бутылки. Она прослужит годами, а ещё можно выбрать красивый дизайн, который будет приятно носить с собой.";
    } else if (answers.question8 === 'Иногда') {
        totalCO2 += 75;
        advice += "Проведите эксперимент: попробуйте месяц без пластиковых бутылок. Варианты замены: фильтр для воды дома, многоразовая бутылка или покупка напитков в стекле.";
    } else if (answers.question8 === 'Почти никогда') {
        totalCO2 += 50;
        advice += "Вы не пользуетесь одноразовыми бутылками, супер! Использование многоразовых бутылок и сумок — это важный шаг к сокращению пластиковых отходов.";
    }

    if (answers.question9 === "Часто (1000+ км в месяц)") {
        totalCO2 += 300;
        advice += "Начните использовать экологичный транспорт — например, электрический автомобиль или переходите на велосипед для коротких поездок. Это сократит количество выбросов CO₂ и будет полезно для вашего здоровья.";
    } else if (answers.question9 === 'Иногда (200–1000 км в месяц)') {
        totalCO2 += 200;
        advice += "Попробуйте уменьшить количество поездок на автомобиле, особенно если можно использовать общественный транспорт или велосипед. Каждая поездка на метро или автобусе — это шаг к меньшим выбросам!";
    } else if (answers.question9 === 'Редко (0–200 км в месяц)') {
        totalCO2 += 100;
        advice += "Вы уже уменьшаете выбросы CO₂, используя личный автомобиль только в необходимых случаях, отлично!";
    }

    if (answers.question10 === "6+ раз") {
        totalCO2 += 200;
        advice += "Вместо такси используйте общественный транспорт или велосипед для коротких поездок. Также, вы можете рассмотреть “Эко Такси” для быстрого передвижения без вреда природе!";
    } else if (answers.question10 === '4–5 раз') {
        totalCO2 += 150;
        advice += "Вместо такси, попробуйте использовать карпулинг (поездки с друзьями или коллегами). Это снизит выбросы CO₂ на каждого человека и может быть удобным!";
    } else if (answers.question10 === '0–3 раза') {
        totalCO2 += 100;
        advice += "Ваше потребление такси не влияет на состояние озонового слоя, это классно!";
    }

    if (answers.question11 === "Регулярно") {
        totalCO2 += 150;
        advice += "Отлично, что вы часто выбираете метро, но подумайте, не можете ли вы уменьшить частоту поездок, например, с помощью пеших прогулок на более короткие расстояния.";
    } else if (answers.question11 === 'Часто') {
        totalCO2 += 100;
        advice += "Вместо такси, попробуйте использовать карпулинг (поездки с друзьями или коллегами). Это снизит выбросы CO₂ на каждого человека и может быть удобным!";
    } else if (answers.question11 === 'Редко') {
        totalCO2 += 50;
    }

    if (answers.question12 === "Регулярно") {
        totalCO2 += 100;
        advice += "Вместо автобусов, на короткие расстояния, попробуйте ходить пешком или использовать велосипед. Это сократит ваши выбросы CO₂ и улучшит физическую форму!";
    } else if (answers.question12 === 'Часто') {
        totalCO2 += 70;
        advice += "Отлично, что вы используете общественный транспорт! Попробуйте в будущем комбинировать поездки на автобусе с велосипедами или пешими прогулками для ещё большего снижения выбросов.";
    } else if (answers.question12 === 'Редко') {
        totalCO2 += 40;
        advice += "Вы редко ездите на автобусе/троллейбусе, молодец!"
    }

    if (answers.question13 === "Никогда") {
        advice += "Ещё мы советуем вам рассмотреть переход на экологичный транспорт — электросамокат или велосипед. Это поможет не только снизить выбросы CO₂, но и улучшить ваше здоровье.";
    } else if (answers.question13 === 'Иногда') {
        totalCO2 -= 50;
        advice += "Также попробуйте использовать экологичный транспорт, как основное средство передвижения для коротких поездок. Электрический самокат или велосипед могут быть удобными и экологичными альтернативами.";
    } else if (answers.question13 === 'Регулярно') {
        totalCO2 += 100;
    }

    if (answers.question14 === "Мало, пользуюсь транспортом") {
        totalCO2 += 50;
        advice += "Вы редко ходите пешком, начните с кратких прогулок. Замените короткие поездки на ходьбу пешком, чтобы снизить выбросы CO₂ и побудить себя к здоровому образу жизни.";
    } else if (answers.question14 === 'Иногда') {
        totalCO2 -= 25;
        advice += "Вы иногда предпочитате ходьбу пешком поездкам, это хорошо! Поднимите свою физическую активность и почаще ходите на короткие расстояния. Это не только уменьшит выбросы CO₂, но и улучшит вашу физическую форму!";
    } else if (answers.question14 === 'Регулярно, не пользуюсь авто') {
        totalCO2 -= 75;
        advice += "Также круто, что вы заменяете автомобиль прогулками пешком! Это полезно не только для природы, но и для вас самих.";
    }

    if (answers.question15 === "0 раз") {
        totalCO2 += 0;
        advice += "Вы не пользуетесь самолётами, замечательно! Путешествия без перелётов — это лучший способ сэкономить углерод.";
    } else if (answers.question15 === '1–2 раза') {
        totalCO2 += 125;
    } else if (answers.question15 === '3+ раза') {
        totalCO2 += 200;
        advice += "Постарайтесь снизить количество полётов на самолёте. Попробуйте использовать поезда для поездок на средние расстояния — это снизит выбросы CO₂ и позволит увидеть больше интересных мест по пути.";
    }

    if (answers.question16 === "Нет, не употребляю данный продукт") {
        totalCO2 += 0;
    } else if (answers.question16 === 'В принципе - нет, но иногда употребляю') {
        totalCO2 += 600;
    } else if (answers.question16 === 'Да, ем на постоянной основе') {
        totalCO2 += 1000;
        advice += "Попробуйте постепенно снижать потребление красного мяса, например, замените его на птицу или рыбу, чтобы снизить углеродный след вашего рациона.";
    }

    if (answers.question17 === "Стараюсь избегать молочных продуктов") {
        totalCO2 += 0;
    } else if (answers.question17 === 'Редко ем') {
        totalCO2 += 350;
        advice += "Попробуйте перейти на растительные альтернативы молочным продуктам — такие, как миндальное молоко";
    } else if (answers.question17 === 'Часто ем') {
        totalCO2 += 500;
        advice += "Рекомендуем вам сократить потребление молочных продуктов. Вместо молока выбирайте растительные напитки, а вместо сыра попробуйте аналогичные продукты на растительной основе.";
    }

    if (answers.question18 === "0–3 раза в месяц") {
        totalCO2 += 25;
    } else if (answers.question18 === '4–8 раз в месяц') {
        totalCO2 += 100;
        advice += "Попробуйте вместо полуфабрикатов, готовить самим с использованием свежих продуктов. Это будет намного полезнее!";
    } else if (answers.question18 === '8+ раз в месяц') {
        totalCO2 += 150;
        advice += "Также мы советуем вам сократить потребление фастфуда и полуфабрикатов, лучше готовьте сами с использованием свежих ингредиентов!";
    }

    if (answers.question19 === "0–1 гаджет в год") {
        totalCO2 += 100;
    } else if (answers.question19 === '2–3 гаджета в год') {
        totalCO2 += 200;
        advice += "Вместо покупок нового гаджета, попробуйте воспользоваться услугами ремонта или гарантии от компаний, чтобы продлить срок службы старого";
    } else if (answers.question19 === '3+ гаджета в год') {
        totalCO2 += 300;
        advice += "Прежде чем обновлять технику, убедитесь, что старое устройство уже не выполняет все ваши задачи.";
    }

    if (answers.question20 === "Мало, стараюсь экономить и слежу за потреблением") {
        totalCO2 += 100;
        advice += "Вы экономите электричество и не напрасно! Природа вас благодарит 🙂";
    } else if (answers.question20 === 'Обычное количество (выключаю свет, когда выхожу из комнаты и т. д.)') {
        totalCO2 += 350;
        advice += "Также рекмендуем перейти на LED-лампы и использовать технику с классом энергоэффективности А+ и выше. Это поможет снизить потребление энергии без потери комфорта.";
    } else if (answers.question20 === 'Не слежу/много') {
        totalCO2 += 500;
        advice += "Начните отключать приборы из розеток, когда не используете их. Это простой шаг, который может уменьшить ваше энергопотребление на 10–15%!";
    }

    if (answers.question21 === "0–1") {
        totalCO2 += 25;
    } else if (answers.question21 === '2-3') {
        totalCO2 += 75;
    } else if (answers.question21 === '3+') {
        totalCO2 += 150;
        advice += "Еще советуем проверить, какие приборы действительно должны быть постоянно включены в розетку. Может, телевизор и ноутбук работают впустую? Отключение ненужных устройств может сократить выбросы CO₂ и снизить ваш счёт за электричество.";
    }

    if (answers.question22 === "Централизованное отопление") {
        totalCO2 += 150;
    } else if (answers.question22 === 'Газовый котёл') {
        totalCO2 += 300;
    } else if (answers.question22 === 'Дровяная печь/камин') {
        totalCO2 += 500;
    } else if (answers.question22 === 'Я не знаю') {
        totalCO2 += 300;
    }

    if (answers.question23 === "Везде") {
        totalCO2 += 25;
    } else if (answers.question23 === 'На некоторых кранах/душах') {
        totalCO2 += 75;
        advice += "А ещё мы думаем, что устанока водосберегающих насадки на все краны — отличная идея, они уменьшают расход воды без потери комфорта и позволяют экономить до 50% воды!";
    } else if (answers.question23 === 'Нет') {
        totalCO2 += 100;
        advice += "Ещё мы хотим вам напомнить, что установка водосберегающей насадки на душ — это минутное дело, а экономия воды и электричества (на её нагрев) будет значительной";
    } else if (answers.question23 === 'Я не знаю') {
        totalCO2 += 75;
    }

     if (answers.question24 === "Не имею подобный вид вещей") {
        totalCO2 += 50;
    } else if (answers.question24 === 'Меньшая часть/половина') {
        totalCO2 += 75;
        advice += "Попробуйте придерживаться правила «медленной моды» — вместо покупки новых вещей инвестируйте в качественную одежду, которая прослужит дольше.";
    } else if (answers.question24 === 'Большая часть') {
        totalCO2 += 100;
        advice += "Попробуйте придерживаться правила «медленной моды» — вместо покупки новых вещей инвестируйте в качественную одежду, которая прослужит дольше.";
    } else if (answers.question24 === 'Я не знаю') {
        totalCO2 += 75;
    }

    if (answers.question25 === "Большинство") {
        totalCO2 -= 200;
    } else if (answers.question25 === 'Меньшая часть/половина') {
        totalCO2 -= 100;
        advice += "И еще: постепенно заменяйте обычные лампочки на LED-аналоги — они служат в 10 раз дольше и снижают потребление электроэнергии!";
    } else if (answers.question25 === 'Нет, не использую') {
        totalCO2 += 200
        advice += "И как насчёт того, чтобы заменить хотя бы одну лампочку на энергосберегающую и посчитать экономию на счетах за электричество. Возможно, это вас приятно удивит!";
    } else if (answers.question25 === 'Я не знаю') {
        totalCO2 += 100;
    }

    if (answers.question26 === "Полная система очистки") {
        totalCO2 -= 200;
    } else if (answers.question26 === 'Фильтр для питьевой воды') {
        totalCO2 -= 100;
        advice += "Вы поставили фильтр для питьевой воды, отличный шаг! Не забудьте также использовать фильтры для душа, чтобы сократить потребление неочищенной воды";
    } else if (answers.question26 === 'Нет, не использую') {
        totalCO2 += 100
        advice += "Кстати, еще мы советуем вам установить просто фильтр для воды, ведь он помогает снизить потребность в бутилированной воде и уменьшить выбросы CO₂.";
    } else if (answers.question26 === 'Я не знаю') {
        totalCO2 += 50;
    }

    if (answers.question27 === "Регулярно") {
        totalCO2 -= 200;
    } else if (answers.question27 === 'Иногда') {
        totalCO2 -= 50;
        advice += "Вы не очень часто участвуете в субботниках, попоробуйте вовлекать друзей и коллег в экологические акции. Вместе это не только полезнее, но и веселее!";
    } else if (answers.question27 === 'Никогда') {
        totalCO2 += 100
        advice += "Вы не любитель субботников, но начните с малого — например, уберите мусор в парке рядом с домом. Возможно, это вдохновит вас на более активное участие в экодвижении";
    }

    if (answers.question28 === "0–5 вещей") {
        totalCO2 += 50;
    } else if (answers.question28 === '6–15 вещей') {
        totalCO2 += 100;
        advice += "А ещё мы предлагаем устроить эксперимент — месяц без новых покупок. Это поможет осознанно подойти к выбору вещей и снизить углеродный след.";
    } else if (answers.question28 === '15+ вещей') {
        totalCO2 += 150
        advice += "А ещё мы предлагаем вам новую стратегию «одна новая вещь — одна на переработку». Так ваш гардероб станет осознаннее, а окружающая среда — чище.";
    }

    if (answers.question29 === "Газовая") {
        totalCO2 += 200;
        advice += "Ну и используйте сковороды и кастрюли с толстым дном — они нагреваются быстрее и сокращают расход электроэнергии.";

    } else if (answers.question29 === 'Электрическая') {
        totalCO2 += 100;
        advice += "Ну и попробуйте готовить на среднем или малом огне — это экономит газ и снижает выбросы CO₂.";
    } else if (answers.question29 === 'Индукционная') {
        totalCO2 += 50;
    }

    document.getElementById("co2_amount").textContent = totalCO2;
    document.getElementById("co2_level").textContent = totalCO2 < 3070 ? 'Низкий' : totalCO2 < 5000 ? 'Средний' : 'Высокий';
    document.getElementById("advice").textContent = advice;
}

if (window.location.pathname.includes("results.html")) {
    displayResults();
}
