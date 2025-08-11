-- Extend IntegrationProvider enum with OPENAI and GEMINI if missing
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_type t JOIN pg_enum e ON t.oid = e.enumtypid
    WHERE t.typname = 'IntegrationProvider' AND e.enumlabel = 'OPENAI'
  ) THEN
    ALTER TYPE "IntegrationProvider" ADD VALUE 'OPENAI';
  END IF;
  IF NOT EXISTS (
    SELECT 1 FROM pg_type t JOIN pg_enum e ON t.oid = e.enumtypid
    WHERE t.typname = 'IntegrationProvider' AND e.enumlabel = 'GEMINI'
  ) THEN
    ALTER TYPE "IntegrationProvider" ADD VALUE 'GEMINI';
  END IF;
END
$$; 