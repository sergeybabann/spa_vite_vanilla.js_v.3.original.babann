export default function Sprint_01() {
  const sprint_01 = document.createElement('sprint_01')
  sprint_01.classList.add('sprint_01')
  sprint_01.innerHTML = `
    <div class="header__content">
            <div class="header__wrapper-1">
            <h1 class="header__title-1">Яндекс Практикум</h1>
            <h2 class="header__title-2">Спринт 1</h2>
            </div><!--header__wrapper-1-->
            
            <!-- Menu Navigation -->
            <div class="header__menu">
                <ul class="header__menu-list">
                <li class="header__menu-item">
                    <a class="header__menu-link" href="/">Home</a>
                </li>
                <li class="header__menu-item">
                    <a class="header__menu-link" href="/sprint_01">Спринт 1</a>
                </li>
                <li class="header__menu-item">
                    <a class="header__menu-link" href="/sprint_02">Спринт 2</a>
                </li>
                <li class="header__menu-item">
                    <a class="header__menu-link" href="/sprint_03">Спринт 3</a>
                </li>                         
                </ul>
            </div><!--header__menu-->
            </div><!--header__content-->
            
    <!-- Main Content -->
    <div class="main">
        <h3 class="main__title-1">1 Спринт: Семантика и лэйаут</h3>
        <ul class="main__list-1">
            <li class="main__list-1-item"><a href="/sprint_01/theme_01" class="main__link-default">1. Интро в Спринт</a></li> 
            <li class="main__list-1-item"><a href="/sprint_01/theme_02" class="main__link-default">2. Шрифты и типографика</a></li>  
            <li class="main__list-1-item"><a href="/sprint_01/theme_03" class="main__link-default">3. Почему вы выбрали Практикум</a></li>
            <li class="main__list-1-item"><a href="/sprint_01/theme_04" class="main__link-default">4. Семантика</li>
            <li class="main__list-1-item"><a href="/sprint_01/theme_05" class="main__link-default">5. Глобальные атрибуты</li>
            <li class="main__list-1-item"><a href="/sprint_01/theme_06" class="main__link-default">6. Флексбокс-верстка</li>
            <li class="main__list-1-item"><a href="/sprint_01/theme_07" class="main__link-default">7. Расскажите про ваше обучение</li>
            <li class="main__list-1-item"><a href="/sprint_01/theme_08" class="main__link-default">8. Готовый кейс: "С чистого листа"</li>
            <li class="main__list-1-item"><a href="/sprint_01/theme_09" class="main__link-default">9. Позиционирование элементов</li>
            <li class="main__list-1-item"><a href="/sprint_01/theme_10" class="main__link-default">10. Grid layout, часть 1</li>
            <li class="main__list-1-item"><a href="/sprint_01/theme_11" class="main__link-default">11. Дополнительные статьи</li>
            <li class="main__list-1-item"><a href="/sprint_01/theme_12" class="main__link-default">12. Bash и Git. Основы</li>
            <li class="main__list-1-item"><a href="/sprint_01/theme_13" class="main__link-default">13. Проект 1: "Оно тебе надо"</li>
            <li class="main__list-1-item"><a href="/sprint_01/theme_14" class="main__link-default">14. Сдача проектной работы "Оно тебе надо"</li>
            <li class="main__list-1-item"><a href="/sprint_01/theme_15" class="main__link-default">15. Обратная связь по спринту.</li>
        </ul>
    </div>  
    `
  return sprint_01
}

// console.log('About Page Script Loaded');
