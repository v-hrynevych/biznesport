echo "⏳ Waiting for DB..."
until nc -z -v -w30 db 3306; do
  echo "Waiting for MySQL..."
  sleep 2
done

echo "✅ DB is up! Running migrations..."
npm run migrate
npm run seed
npm start