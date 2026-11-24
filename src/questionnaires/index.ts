import { caiqLite } from './caiq-lite';
import { mvspByoc } from './mvsp-byoc';
import { owaspAgentic } from './owasp-agentic';

import type { Questionnaire, QuestionnaireMeta } from './types';

export const allQuestionnaires: Questionnaire[] = [caiqLite, owaspAgentic, mvspByoc];

export const questionnaireMeta: QuestionnaireMeta[] = allQuestionnaires.map((q) => ({
  name: q.name,
  slug: q.slug,
  description: q.description,
  enabled: q.enabled,
  questionCount: q.sections.reduce((sum, s) => sum + s.questions.length, 0),
  sectionCount: q.sections.length,
  version: q.version,
}));
