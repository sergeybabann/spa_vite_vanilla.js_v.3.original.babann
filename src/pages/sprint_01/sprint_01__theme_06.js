export default function Sprint_01_Theme_06() {
  const lesson = document.createElement('lesson')
  lesson.classList.add('lesson')
  lesson.innerHTML = `
          <div class="header2__content">
  <div class="header2__wrapper-1">
  <!----- Bread Crumbs ----->
      <div class="header2__bread-crumbs">
          <a href="/sprint_01" class="back-link main__link-default">Спринт 1: Семантика и лэйаут</a>           
      </div><!--bread-crumbs-->
  </div><!--header__wrapper-1-->
  </div><!--header2 content -->
  
  <!----- MAIN ----->
  <div class="margin__main">
  <div class="main">
      <div class="main__wrapper-1">
      <h1 class="main__title-1">Тема 6: Флексбокс-верстка</h1>
          
          <h3 class="main__title-3">Уроки</h3>
          <!----- Lessons ----->
          <ul class="main__list-1">
          <li class="main__list-1-item">
              <a class="main__link-default" href="/sprint_01/theme_06/lesson_01">1. Флексбокс-вёрстка. Введение</a>         
          </li>
          <li class="main__list-1-item">
              <a class="main__link-default" href="/sprint_01/theme_06/lesson_02">2. Преобразование во флекс-контейнер</a>         
          </li>
          <li class="main__list-1-item">
              <a class="main__link-default" href="/sprint_01/theme_06/lesson_03">3. Вложенные флекс-контейнеры</a>         
          </li>
          <li class="main__list-1-item">
              <a class="main__link-default" href="/sprint_01/theme_06/lesson_04">4. Направление внутри флекс-контейнера</a>         
          </li>
          <li class="main__list-1-item">
              <a class="main__link-default" href="/sprint_01/theme_06/lesson_05">5. Выравнивание по основной оси</a>         
          </li>
          <li class="main__list-1-item">
              <a class="main__link-default" href="/sprint_01/theme_06/lesson_06">6. Выравнивание по дополнительной оси</a>         
          </li>
          <li class="main__list-1-item">
              <a class="main__link-default" href="/sprint_01/theme_06/lesson_07">7. Ура! Инструменты разработчика</a>         
          </li>
          <li class="main__list-1-item">
              <a class="main__link-default" href="/sprint_01/theme_06/lesson_08">8. Перенос флекс-элементов</a>         
          </li>
          <li class="main__list-1-item">
              <a class="main__link-default" href="/sprint_01/theme_06/lesson_09">9. Настройка отступов с помощью gap</a>         
          </li>
          <li class="main__list-1-item">
              <a class="main__link-default" href="/sprint_01/theme_06/lesson_10">10. Выравнивание флекс-элементов при переносе</a>         
          </li>
          <li class="main__list-1-item">
              <a class="main__link-default" href="/sprint_01/theme_06/lesson_11">11. Свойства флекс-элементов. Порядок</a>         
          </li>
          <li class="main__list-1-item">
              <a class="main__link-default" href="/sprint_01/theme_06/lesson_12">12. Свойства флекс-элементов. Выравнивание отдельного элемента</a>         
          </li>
          <li class="main__list-1-item">
              <a class="main__link-default" href="/sprint_01/theme_06/lesson_13">13. Flex basis, flex-grow и flex-shrink</a>         
          </li>
          <li class="main__list-1-item">
              <a class="main__link-default" href="/sprint_01/theme_06/lesson_14">14. Заключение</a>         
          </li>
          </ul>

          </div><!--main__wrapper-1-->
          </div><!--main-->
          </div><!--margin__main-->
      `
  return lesson
}
