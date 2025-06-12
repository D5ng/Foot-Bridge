import { AvatarIcon, EditIcon } from "@/shared/assets/images"
import { useAuthStore } from "@/shared/stores/authStore"
import {
  profileAvatar,
  profileAvatarEmail,
  profileAvatarName,
  profileAvatarNameWrapper,
  profileAvatarWrapper,
  profileAvatarImage,
  profileAvatarEditIcon,
  profileAvatarEditIconImage,
} from "./ProfileAvatar.css"

export default function ProfileAvatar() {
  const { user } = useAuthStore()

  return (
    <div className={profileAvatarWrapper}>
      <div className={profileAvatar}>
        <img className={profileAvatarImage} src={user?.user_metadata.avatar_url || AvatarIcon} alt="profile avatar" />

        <div className={profileAvatarEditIcon}>
          <img className={profileAvatarEditIconImage} src={EditIcon} alt="edit" />
        </div>
      </div>

      <div className={profileAvatarNameWrapper}>
        <span className={profileAvatarName}>{user?.user_metadata.name}</span>
        <span className={profileAvatarEmail}>{user?.user_metadata.email}</span>
      </div>
    </div>
  )
}
