import { IS_SHOW_LOGIN } from '@/components/Login/type'
import { inject, ref } from 'vue'
import { useUserStore } from '@/stores/user'
export const useLogin = () => {
  const isShowLogin = inject(IS_SHOW_LOGIN, ref(false))
  const userStore = useUserStore()

  const login = () => {
    isShowLogin.value = true
  }
  const hide = () => {
    isShowLogin.value = false
  }
  return {
    login,
    hide
  }
}
