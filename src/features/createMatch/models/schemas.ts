import { createMatchBaseSchema } from "@/entities/match"

/** Funnel Step Schema */
export const matchDateTimeStepSchema = createMatchBaseSchema.pick({
  matchDate: true,
  matchTime: true,
  fieldName: true,
})

export const matchFormatStepSchema = createMatchBaseSchema.required({
  matchDate: true,
  matchTime: true,
  fieldName: true,
})

export const matchDescriptionStepSchema = matchFormatStepSchema.required({
  matchFormat: true,
})

export const matchCompleteStepSchema = matchDescriptionStepSchema.required({
  description: true,
})

/** Form Validation Schema */
export const matchDateFormSchema = createMatchBaseSchema
  .pick({
    matchDate: true,
    matchTime: true,
    fieldName: true,
  })
  .required({
    matchDate: true,
    matchTime: true,
    fieldName: true,
  })

export const matchFormatFormSchema = createMatchBaseSchema
  .pick({
    matchFormat: true,
  })
  .required({
    matchFormat: true,
  })

export const matchDescriptionFormSchema = createMatchBaseSchema
  .pick({
    description: true,
  })
  .required({
    description: true,
  })
