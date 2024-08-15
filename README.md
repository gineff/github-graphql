# Тестовое задание

## Описание

Это тестовое задание было выполнено для демонстрации навыков работы с React, RTK (Redux Toolkit), и TypeScript. Проект представляет собой **веб-приложение для поиска и отображения репозиториев на GitHub с использованием GraphQL API**.

## Стек технологий

- **React**: Использован для создания пользовательского интерфейса.
- **TypeScript**: Применяется для добавления типизации в проект.
- **Redux Toolkit (RTK)**: Использован для управления состоянием приложения и обработки асинхронных запросов.
- **RTK Query**: Для выполнения запросов к GraphQL API.
- **GraphQL**: API для получения данных из GitHub.
- **Vite**: Используется для сборки проекта и разработки, обеспечивая быструю перезагрузку и оптимизацию.
- **FSD (Feature-Sliced Design)**: Применена архитектура для структурирования проекта.
- **CSS/Styled Components/Material-UI**: для стилизации компонентов.

## Функциональность

- Поиск репозиториев по ключевым словам.
- Отображение списка репозиториев с информацией о языке программирования, количестве звезд и форков.
- Сортировка репозиториев по наименованию, языку программирования, количеству звезд и форков
- Пагинация результатов поиска.
- Просмотр детальной информации о конкретном репозитории, включая описание, лицензию и связанные темы.
- Хранение параметров запросов (поисковые ключевые слова, параметры пагинации и фильтры) в **URL search-параметрах**, что позволяет сохранять и делиться состоянием приложения.

## Установка и запуск проекта

### Клонирование репозитория

```bash
git clone https://github.com/gineff/graphql-test-task
cd graphql-test-task
```

### Установка зависимостей

```bash
npm install
```

### Настройка переменных окружения

Создайте файл `.env.local` в корне проекта и добавьте следующую переменную:

```plaintext
VITE_GITHUB_TOKEN=ваш_токен_гитхаб
```

### Запуск приложения

```bash
npm start
```

## Архитектура проекта

Проект организован по принципам **FSD (Feature-Sliced Design)**, что обеспечивает модульность и масштабируемость.

- **src/**: Основная директория с исходным кодом.
  - **app/**: Инициализация приложения и глобальные конфигурации.
  - **features/**: Функциональные единицы, отвечающие за конкретные части приложения (например, поиск репозиториев).
  - **shared/**: Общие модули и утилиты, используемые в разных частях приложения.
  - **components/**: Переиспользуемые компоненты React.
  - **services/**: Запросы к API с использованием RTK Query.
  - **types/**: Типы TypeScript, используемые в проекте.
  - **app.tsx**: Главный компонент приложения.

## Демо

Вы можете посмотреть демо-версию приложения, развернутую на платформе Vercel, по следующей ссылке: [Demo на Vercel](https://graphql-test-task-eguz.vercel.app).

## Figma

Ссылка на шаблон Figma: [Шаблон](https://www.figma.com/design/xAqDR1AHbRdwYOVz2B7baP).

## Контакты

Если у вас есть вопросы по проекту, вы можете связаться со мной через telegram: [https://t.me/gineff].
