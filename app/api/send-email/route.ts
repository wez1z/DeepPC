import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { contacts } from '../../../data/configs';

export async function POST(request: Request) {
  try {
    const { name, phone, email, address, config, components, totalPrice } = await request.json();

    // Создаем транспорт для отправки email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    // Формируем текст письма
    const mailText = `
Новый заказ на сайте DeepPC:

Имя: ${name}
Телефон: ${phone}
Email: ${email}
Адрес: ${address}

Конфигурация: ${config}

Компоненты:
Процессор: ${components.cpu}
Видеокарта: ${components.gpu}
Материнская плата: ${components.motherboard}
Оперативная память: ${components.ram}
Корпус: ${components.case}
Блок питания: ${components.psu}

Итоговая стоимость: ${totalPrice} BYN
    `;

    // Отправляем email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'Новый заказ на сайте DeepPC',
      text: mailText,
      html: mailText.replace(/\n/g, '<br>')
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 