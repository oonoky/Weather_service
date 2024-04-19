# Используем nginx:alpine как базовый образ
FROM nginx:alpine

# Удаляем файлы по умолчанию из nginx
RUN rm -rf /usr/share/nginx/html/*

# Копируем файлы сборки Angular в папку nginx
COPY dist/frontend /usr/share/nginx/html

# Открываем порт 80
EXPOSE 80

# Запускаем nginx на переднем плане
CMD ["nginx", "-g", "daemon off;"]