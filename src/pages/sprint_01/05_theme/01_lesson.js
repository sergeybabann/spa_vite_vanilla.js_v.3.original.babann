export default async function Lesson() {
  const lesson = document.createElement('div')
  lesson.classList.add('lesson')

  try {
    const response = await fetch(
      '/pages/01_sprint/05_theme/01_lesson/01_lesson.html'
    )
    const htmlContent = await response.text()

    lesson.innerHTML = htmlContent
  } catch (error) {
    console.error('Ошибка загрузки HTML:', error)
  }

  return lesson
}
