export default function Sprint_01_Theme_05() {
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
      <h1 class="main__title-1">Тема 5: Глобальные атрибуты</h1>
          
          <h3 class="main__title-3">Уроки</h3>
          <!----- Lessons ----->
          <ul class="main__list-1">
          <li class="main__list-1-item">
              <a class="main__link-default" href="/sprint_01/theme_05/lesson_01">1. Язык документа и его элементов</a>         
          </li>
          <li class="main__list-1-item">
              <a class="main__link-default" href="/sprint_01/theme_05/lesson_02">2. Идентификаторы</a>         
          </li>
          </ul>

          </div><!--main__wrapper-1-->
          </div><!--main-->
          </div><!--margin__main-->
      `
  return lesson
}
