import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 5000;

// Используем middleware
app.use(cors());
app.use(bodyParser.json());

// Определяем маршрут для POST-запроса
app.post('/api/contact', (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  // Записываем данные в консоль
  console.log('Полученные данные:', req.body);
console.log(email, message)
  // Отправляем ответ с сообщением
  res.json({ message: `Спасибо за ваш интерес, ${name}.` });
});

// Запускаем сервер
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});

