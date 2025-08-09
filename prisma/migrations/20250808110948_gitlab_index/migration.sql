-- CreateTable
CREATE TABLE "public"."GitlabGroup" (
    "id" TEXT NOT NULL,
    "integrationId" TEXT NOT NULL,
    "gitlabGroupId" INTEGER NOT NULL,
    "parentGitlabGroupId" INTEGER,
    "name" TEXT NOT NULL,
    "fullPath" TEXT,
    "lastSyncedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GitlabGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."GitlabProject" (
    "id" TEXT NOT NULL,
    "integrationId" TEXT NOT NULL,
    "gitlabProjectId" INTEGER NOT NULL,
    "groupGitlabId" INTEGER,
    "name" TEXT NOT NULL,
    "pathWithNamespace" TEXT NOT NULL,
    "defaultBranch" TEXT,
    "lastSyncedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GitlabProject_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "GitlabGroup_integrationId_parentGitlabGroupId_idx" ON "public"."GitlabGroup"("integrationId", "parentGitlabGroupId");

-- CreateIndex
CREATE UNIQUE INDEX "GitlabGroup_integrationId_gitlabGroupId_key" ON "public"."GitlabGroup"("integrationId", "gitlabGroupId");

-- CreateIndex
CREATE INDEX "GitlabProject_integrationId_groupGitlabId_idx" ON "public"."GitlabProject"("integrationId", "groupGitlabId");

-- CreateIndex
CREATE UNIQUE INDEX "GitlabProject_integrationId_gitlabProjectId_key" ON "public"."GitlabProject"("integrationId", "gitlabProjectId");

-- AddForeignKey
ALTER TABLE "public"."GitlabGroup" ADD CONSTRAINT "GitlabGroup_integrationId_fkey" FOREIGN KEY ("integrationId") REFERENCES "public"."IntegrationSettings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."GitlabProject" ADD CONSTRAINT "GitlabProject_integrationId_fkey" FOREIGN KEY ("integrationId") REFERENCES "public"."IntegrationSettings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."GitlabProject" ADD CONSTRAINT "GitlabProject_integrationId_groupGitlabId_fkey" FOREIGN KEY ("integrationId", "groupGitlabId") REFERENCES "public"."GitlabGroup"("integrationId", "gitlabGroupId") ON DELETE RESTRICT ON UPDATE CASCADE;
