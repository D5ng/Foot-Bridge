import { Link } from "react-router"
import { Badge, Button, NavigationBar, NavigationBarTitle } from "@/shared/ui"
import {
  FormLayoutRoot,
  FormLayoutHeader,
  FormLayoutHeaderTitle,
  FormLayoutButtonLayout,
} from "@/shared/ui/Layouts/FormLayout/FormLayout"
import { formatPhoneNumber } from "@/shared/utils"
import type { FormFieldKey } from "@/features/createTeam/models/types"
import { FORM_FIELD_MAPPING } from "@/features/createTeam/consts"
import type { CreateTeamPayload, MATCH_TIMES_OPTIONS } from "@/entities/team"
import {
  completeEmblemWrapper,
  completeInfoList,
  completeInfoItem,
  completeInfoItemLabel,
  completeInfoItemValue,
  completeInfoNotice,
  completeInfoItemValueList,
  completeInfoItemValueListWrapper,
} from "./CompleteStep.css"

interface Props {
  data: CreateTeamPayload
}

export default function CompleteStep({ data }: Props) {
  return (
    <>
      <NavigationBar>
        <NavigationBarTitle>팀 정보</NavigationBarTitle>
      </NavigationBar>

      <main>
        <FormLayoutRoot>
          <FormLayoutHeader>
            <FormLayoutHeaderTitle>
              팀이 성공적으로 만들어졌어요.
              <br />
              이제 첫 매치를 등록해보세요
            </FormLayoutHeaderTitle>
          </FormLayoutHeader>

          <div>
            <div className={completeEmblemWrapper}>
              <img src={data.emblem} alt="팀 엠블럼" />
            </div>
            <ul className={completeInfoList}>
              {Object.entries(data).map(([key, value]) => {
                if (key === "emblem" || key === "teamIntro") {
                  return null
                }

                if (key === "teamLeaderPhoneNumber") {
                  return (
                    <li className={completeInfoItem} key={key}>
                      <span className={completeInfoItemLabel}>{FORM_FIELD_MAPPING[key]}</span>
                      <div className={completeInfoItemValue}>{formatPhoneNumber(value)}</div>
                    </li>
                  )
                }

                if (key === "matchTime") {
                  return (
                    <li className={value.length === 0 ? completeInfoItem : completeInfoItemValueListWrapper} key={key}>
                      <span className={completeInfoItemLabel}>{FORM_FIELD_MAPPING[key]}</span>
                      {/* {value.length === 0 && <div className={completeInfoItemValue}>{value.join(", ")}</div>} */}

                      <ul className={completeInfoItemValueList}>
                        {value.map((item: (typeof MATCH_TIMES_OPTIONS)[number]) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </li>
                  )
                }

                if (key === "teamActivityDays") {
                  return (
                    <li className={completeInfoItem} key={key}>
                      <span className={completeInfoItemLabel}>{FORM_FIELD_MAPPING[key]}</span>
                      <div className={completeInfoItemValue}>{value.join(", ")}</div>
                    </li>
                  )
                }

                if (key === "skillLevel") {
                  return (
                    <li className={completeInfoItem} key={key}>
                      <span className={completeInfoItemLabel}>{FORM_FIELD_MAPPING[key]}</span>
                      <div className={completeInfoItemValue}>
                        <Badge>{value}</Badge>
                      </div>
                    </li>
                  )
                }

                return (
                  <li className={completeInfoItem} key={key}>
                    <span className={completeInfoItemLabel}>{FORM_FIELD_MAPPING[key as FormFieldKey]}</span>
                    <div className={completeInfoItemValue}>{value}</div>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className={completeInfoNotice}>
            정보가 잘못되었나요?
            <br />
            마이페이지에서 언제든지 팀 정보를 수정하실 수 있어요 :)
          </div>

          <FormLayoutButtonLayout>
            <Button type="button" asChild>
              <Link to="/create-match">매치 등록하러 가기</Link>
            </Button>
            <Button variant="terciary" type="button" asChild>
              <Link to="/my">마이페이지로 이동하기</Link>
            </Button>
          </FormLayoutButtonLayout>
        </FormLayoutRoot>
      </main>
    </>
  )
}
