# Survey App

Интерактивное веб-приложение для прохождения опросов с визуальным прогрессом и итоговой страницей результатов.  
Разработано с использованием **React**, **TypeScript**, **Redux Toolkit**, стилизовано через **styled-components** и **CSS**, сборка настроена на **Webpack**.

---

## 🚀 Технологии

- **React** — построение интерфейса
- **TypeScript** — статическая типизация
- **Redux Toolkit (RTK)** — управление состоянием приложения
- **styled-components** — стилизация компонентов
- **CSS** — глобальные стили
- **Webpack** — сборка проекта

---

## 📂 Архитектура проекта

project/
├── public/                      # Публичные файлы
│   └── icons/                   # Иконки и статичные ресурсы
├── index.html                   # Точка входа HTML
├── src/                         # Исходный код приложения
│   ├── components/              # Переиспользуемые UI-компоненты
│   │   ├── AnswerOptions.tsx    # Список вариантов ответа
│   │   ├── OptionItem.tsx       # Отдельный вариант ответа
│   │   ├── ProgressBar.tsx      # Прогрессбар опроса
│   │   ├── ShareLink.tsx        # Кнопка/ссылка для шаринга результата
│   │   ├── SkipButton.tsx       # Кнопка пропуска вопроса
│   │   └── index.ts             # Экспорт компонентов
│   ├── data/                    # Статические данные
│   │   └── questions.ts         # Список вопросов опроса
│   ├── pages/                   # Страницы приложения
│   │   ├── ResultPage.tsx       # Итоговая страница результатов
│   │   └── SurveyPage.tsx       # Страница прохождения опроса
│   ├── store/                   # Логика состояния
│   │   ├── slices/              # Redux slices
│   │   └── index.ts             # Конфигурация стора
│   ├── styled/                  # Стилизация
│   │   ├── Shared.styled.ts     # Общие styled-компоненты
│   │   └── styles.css           # Глобальные стили
│   ├── types/                   # Типы TypeScript
│   │   └── qustion.ts           # Типизация вопросов (опечатка в названии)
│   ├── App.tsx                  # Корневой компонент приложения
│   └── main.tsx                 # Точка входа React
├── package.json                 # Зависимости и скрипты
├── tsconfig.json                # Конфигурация TypeScript
├── webpack.config.js            # Конфигурация Webpack
└── package-lock.json            # Лок-файл зависимостей


---

## ⚙️ Установка и запуск

### 1. Клонирование репозитория
```bash
git clone https://github.com/artem-apiyn/survey-app.git
cd survey-app

2. Установка зависимостей

npm install

3. Запуск в режиме разработки

npm start

или

npm run dev

4. Сборка production-версии

npm run build
