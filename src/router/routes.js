const routes = {
  '/': () => import('../pages/home/Home.js'),
  /*---------- 01 SPRINT ----------*/
  '/sprint_01': () => import('../pages/sprint_01/sprint_01.js'),
  /*----- 01 THEME -----*/
  '/sprint_01/theme_01': () =>
    import('../pages/sprint_01/sprint_01__theme_01.js'),

  '/sprint_01/theme_02': () =>
    import('../pages/sprint_01/sprint_01__theme_02.js'),

  '/sprint_01/theme_01/lesson_01': () =>
    import('../pages/sprint_01/01_theme/01_lesson.js'),

  '/sprint_01/theme_02/lesson_01': () =>
    import('../pages/sprint_01/02_theme/01_lesson.js'),

  '/sprint_01/theme_02/lesson_02': () =>
    import('../pages/sprint_01/02_theme/02_lesson.js'),

  '/sprint_01/theme_02/lesson_03': () =>
    import('../pages/sprint_01/02_theme/03_lesson.js'),

  '/sprint_01/theme_02/lesson_04': () =>
    import('../pages/sprint_01/02_theme/04_lesson.js'),

  '/sprint_01/theme_02/lesson_05': () =>
    import('../pages/sprint_01/02_theme/05_lesson.js'),
}

const loadRoute = async (path) => {
  // Проверяем, если путь указывает на статический файл
  if (path.startsWith('/pages/')) {
    window.location.href = path // Перенаправляем браузер на статический HTML-файл
    return
  }

  // Загрузка компонентов через маршруты
  const loadComponent = routes[path] || routes['/']
  try {
    const module = await loadComponent()
    appContainer.innerHTML = '' // Очистка перед загрузкой новой страницы
    appContainer.appendChild(await module.default())
  } catch (error) {
    console.error('Ошибка загрузки страницы:', error)
    appContainer.innerHTML = '<h2>Ошибка загрузки страницы</h2>'
  }
}

export default routes
