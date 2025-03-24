# DeepPC - Компьютеры в Беларуси

Веб-приложение для продажи и конфигурации компьютеров в Беларуси. Построено с использованием Next.js, TypeScript и Tailwind CSS.

## Функциональность

- Просмотр различных конфигураций компьютеров
- Фильтрация по цене
- Сортировка конфигураций
- Подробные характеристики каждой конфигурации
- Форма заказа
- Адаптивный дизайн

## Технологии

- Next.js 14
- TypeScript
- Tailwind CSS
- Font Awesome
- React Toastify

## Установка

1. Клонируйте репозиторий:
```bash
git clone https://github.com/yourusername/deep-pc-next.git
cd deep-pc-next
```

2. Установите зависимости:
```bash
npm install
```

3. Создайте файл `.env.local` в корневой директории проекта (если требуется):
```env
NEXT_PUBLIC_API_URL=your_api_url
```

## Запуск

Для разработки:
```bash
npm run dev
```

Для продакшн сборки:
```bash
npm run build
npm start
```

Приложение будет доступно по адресу [http://localhost:3000](http://localhost:3000)

## Структура проекта

```
deep-pc-next/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── data/
│   └── configs.ts
├── public/
├── package.json
├── tailwind.config.ts
└── README.md
```

## Лицензия

MIT
