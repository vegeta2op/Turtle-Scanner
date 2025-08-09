-- Extend IntegrationProvider enum with GITHUB
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_type t
    JOIN pg_enum e ON t.oid = e.enumtypid
    WHERE t.typname = 'IntegrationProvider' AND e.enumlabel = 'GITHUB'
  ) THEN
    ALTER TYPE "IntegrationProvider" ADD VALUE 'GITHUB';
  END IF;
END
$$;

-- Add githubRepoId column to Repository if missing
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'Repository' AND column_name = 'githubRepoId'
  ) THEN
    ALTER TABLE "Repository" ADD COLUMN "githubRepoId" INTEGER;
  END IF;
END
$$;

-- Create indexes if not exist
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_class c JOIN pg_namespace n ON n.oid = c.relnamespace WHERE c.relname = 'Repository_gitlabProjectId_idx' AND c.relkind = 'i') THEN
    CREATE INDEX "Repository_gitlabProjectId_idx" ON "Repository"("gitlabProjectId");
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_class c JOIN pg_namespace n ON n.oid = c.relnamespace WHERE c.relname = 'Repository_githubRepoId_idx' AND c.relkind = 'i') THEN
    CREATE INDEX "Repository_githubRepoId_idx" ON "Repository"("githubRepoId");
  END IF;
END
$$; 