Запуск проекту

1. Для того щоб запустити проект ви повинні встановити npm, з офіційного сайту Node.
2. Викликати командний рядок у місці де ви хочете розмітити проект і ввести команду "git clone https://github.com/VdMt98/Lab3" у powershell.
3. Після клонування проекту вікрити папку з проектом.
4. Ввести команду "npm install" у powershell
5. Ввести команду "npm run" client install у powershell
6. Ввести команду "npm run" dev у powershell.

Запустк проекту за допомогою Docker
1. Ввести команду docker build -t lab4 . у консолі з папки проекту
2. Ввести команду docker run -d -p 5000:5000 -v ${pwd}/app -v ${pwd}/client/build lab4
3. Відкрити у браузері посилання http://localhost:5000
