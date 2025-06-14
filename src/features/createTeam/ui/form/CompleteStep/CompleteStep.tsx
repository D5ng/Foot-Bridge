import { Badge, Button, NavigationBar, NavigationBarTitle } from "@/shared/ui"
import {
  FormLayoutRoot,
  FormLayoutHeader,
  FormLayoutHeaderTitle,
  FormLayoutButtonLayout,
} from "@/shared/ui/Layouts/FormLayout/FormLayout"
import { formatPhoneNumber } from "@/shared/utils"
import {
  completeEmblemWrapper,
  completeInfoList,
  completeInfoItem,
  completeInfoItemLabel,
  completeInfoItemValue,
  completeInfoNotice,
} from "./CompleteStep.css"
import type { CompleteContext, FormFieldKey } from "../form.type"
import { FORM_FIELD_MAPPING } from "../form.constants"

interface Props {
  data: CompleteContext
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
            <Button type="submit">매치 등록하러 가기</Button>
            <Button variant="terciary" type="button">
              마이페이지로 이동하기
            </Button>
          </FormLayoutButtonLayout>
        </FormLayoutRoot>
      </main>
    </>
  )
}
