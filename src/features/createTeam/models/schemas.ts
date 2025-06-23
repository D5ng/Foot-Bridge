import { createTeamBaseSchema } from "@/entities/team"

/** Funnel Step Schema */
export const teamBasicInfoStepSchema = createTeamBaseSchema.pick({
  teamName: true,
  teamLeaderName: true,
  teamLeaderPhoneNumber: true,
})

export const teamActivityDaysStepSchema = createTeamBaseSchema.required({
  teamName: true,
  teamLeaderName: true,
  teamLeaderPhoneNumber: true,
})

export const teamActivityTimeStepSchema = teamActivityDaysStepSchema.required({
  teamActivityDays: true,
})

export const teamAverageAgeStepSchema = teamActivityTimeStepSchema.required({
  matchTime: true,
})

export const teamLevelStepSchema = teamAverageAgeStepSchema.required({
  averageAge: true,
})

export const teamIntroStepSchema = teamLevelStepSchema.required({
  teamLevel: true,
})

export const teamUploadEmblemStepSchema = teamIntroStepSchema.required({
  teamIntro: true,
})

export const teamCompleteStepSchema = teamUploadEmblemStepSchema.required({
  emblem: true,
})

/** Form Validation Schema */
export const teamBasicInfoFormSchema = createTeamBaseSchema
  .pick({
    teamName: true,
    teamLeaderName: true,
    teamLeaderPhoneNumber: true,
  })
  .required({
    teamName: true,
    teamLeaderName: true,
    teamLeaderPhoneNumber: true,
  })

export const teamActivityDaysFormSchema = createTeamBaseSchema
  .pick({
    teamActivityDays: true,
  })
  .required()

export const teamActivityTimeFormSchema = createTeamBaseSchema
  .pick({
    matchTime: true,
  })
  .required()

export const teamAverageAgeFormSchema = createTeamBaseSchema
  .pick({
    averageAge: true,
  })
  .required()

export const teamLevelFormSchema = createTeamBaseSchema
  .pick({
    teamLevel: true,
  })
  .required()

export const teamIntroFormSchema = createTeamBaseSchema
  .pick({
    teamIntro: true,
  })
  .required()

export const teamUploadEmblemFormSchema = createTeamBaseSchema
  .pick({
    emblem: true,
    emblemFile: true,
  })
  .required({
    emblem: true,
    emblemFile: true,
  })
