const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Define the history table model
const History = prisma.$define('history', {
  id: { type: 'number', primaryKey: true },
  userId: { type: 'number' },
  tableName: { type: 'string' },
  columnName: { type: 'string' },
  oldValue: { type: 'string', nullable: true },
  newValue: { type: 'string', nullable: true },
  createdAt: { type: 'date', defaultValue: new Date() },
});

// Define the history trigger function
const historyTrigger = prisma.$executeRaw(`
  CREATE TRIGGER log_changes_trigger
    AFTER INSERT OR UPDATE OR DELETE ON users
    FOR EACH ROW
    BEGIN
      IF (OLD.id IS NULL) THEN
        INSERT INTO history (user_id, table_name, column_name, old_value, new_value)
        VALUES (NEW.id, 'users', 'created_at', NULL, NOW());
      ELSEIF (NEW.deleted_at IS NOT NULL) THEN
        INSERT INTO history (user_id, table_name, column_name, old_value, new_value)
        VALUES (NEW.id, 'users', 'deleted_at', OLD.deleted_at, NOW());
      ELSE
        INSERT INTO history (user_id, table_name, column_name, old_value, new_value)
        VALUES (NEW.id, 'users', TG_ARGV[0], OLD[TG_ARGV[0]], NEW[TG_ARGV[0]]);
      END IF;
    END;
`);

// Create the history trigger
prisma.$executeRaw(`DROP TRIGGER IF EXISTS log_changes_trigger ON users`);
prisma.$executeRaw(historyTrigger);

// Use Prisma to insert, update, and delete data from the users table
(async () => {
  await prisma.user.create({ data: { name: 'Alice' } });
  await prisma.user.update({ where: { name: 'Alice' }, data: { name: 'Bob' } });
  await prisma.user.delete({ where: { name: 'Bob' } });

  // Query the history table to retrieve all rows with a user ID of 1
  const history = await History.findMany({ where: { userId: 1 } });
  console.log(history);
})();

// Close the Prisma client
prisma.$disconnect();
