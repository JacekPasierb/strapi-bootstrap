// config/database.ts
import path from 'path';

export default ({ env }) => {
  const client = env('DATABASE_CLIENT', 'postgres'); // Użyj 'postgres' jako domyślnego klienta

  return {
    connection: {
      client: 'postgres', // Użyj klienta PostgreSQL
      connection: {
        connectionString: env('DATABASE_URL'), // Użyj zmiennej DATABASE_URL
      },
      pool: { min: 2, max: 10 }, // Ustawienia puli połączeń
    },
  };
};