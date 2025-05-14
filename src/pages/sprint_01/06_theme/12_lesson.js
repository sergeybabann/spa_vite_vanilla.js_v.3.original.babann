export default async function Lesson() {
  const lesson = document.createElement('div')
  lesson.classList.add('lesson')

  try {
    const response = await fetch(
      '/pages/01_sprint/06_theme/12_lesson/12_lesson.html'
    )
    const htmlContent = await response.text()

    lesson.innerHTML = htmlContent
  } catch (error) {
    console.error('Ошибка загрузки HTML:', error)
  }

  return lesson
}
